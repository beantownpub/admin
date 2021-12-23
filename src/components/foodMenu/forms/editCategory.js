import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { DeleteButton } from '../../elements/buttons/delete'
import { SubmitButton, ToggleButton } from '../../elements/buttons/main'
import { StyledEditForm, StyledFormContainer } from '../styles/formStyles'

const CONFIG = require('../../content/config.json')
const COLORS = CONFIG.colors

const required = { required: 'Required' }

const reqHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

export const EditCategoryForm = (props) => {
    const [state, setState] = useState({
        showForm: false,
        categoryEdited: false,
        failedEdit: false
    })
    const { handleSubmit, register, errors, reset } = useForm()

    const displayForm = () => {
        setState({ showForm: true })
    }

    const hideForm = () => {
        setState({ showForm: false })
    }

    const successCreate = () => {
        setState({ showForm: false, categoryEdited: true })
        props.runFunction()
    }

    const failedCreate = () => {
        setState({ showForm: true, failedEdit: true })
    }

    const endPoint = `food/categories/${props.slug}/${props.location}`

    const onSubmit = values => {
        fetch(`food/categories/${values.itemSlug}/${props.location}`, {
            method: 'put',
            headers: reqHeaders,
            body: JSON.stringify({
                name: values.categoryName,
                is_active: values.isActive,
                slug: values.itemSlug,
                location: values.location
            })
        })
        .catch(err => {
            alert('Network error: ' + err)
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(
                errorInfo => Promise.reject(errorInfo)) //UPDATE HERE
            }
            return response //UPDATE HERE
        })
        .then(data => {
            console.log('Category Edit Status: ' + data.status)
            if (data.status === 200) {
                successCreate()
            } else {
                failedCreate()
            }
        })
        .catch(err => {
            console.error('WTF ' + err)
            failedCreate()
        })
    }

    return (
        <StyledFormContainer aria-labelledby="Edit form container">
            <div className="alignHorizontally">
                <DeleteButton bgColor={COLORS.red} name={props.slug} runFunction={props.runFunction} endPoint={endPoint} itemType="category"/>
                <ToggleButton bgColor={COLORS.dodgerBlue} runFunction={displayForm} buttonText="Edit" />
            </div>
        {state.showForm &&
        <StyledEditForm aria-labelledby="Add edit category form">
            <h2>Edit Section</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="categoryName">Section Name</label>
                <input className="inputField" name='categoryName' defaultValue={props.name} ref={register(required)} />
                <input name='itemSlug' defaultValue={props.slug} ref={register(required)} type="hidden"/>
                <input name='location' defaultValue={props.location} ref={register(required)} type="hidden"/>
                <div className="checkField">
                <label htmlFor="isActive">{"Active? (Sections marked active are shown on live menu)"}</label>
                    <input
                        className="check"
                        type="checkbox"
                        id="isActive"
                        name="isActive"
                        defaultChecked={props.isActive}
                        ref={register}
                    />
                </div>
                <label htmlFor="description">Description</label>
                    <textarea
                        name='description'
                        rows='6'
                        columns='50'
                        ref={register()}
                        defaultValue={props.description}
                    ></textarea>
                <div className="alignHorizontally autoMargin">
                    <SubmitButton bgColor={COLORS.dodgerBlue} buttonText="Update" runFunction={props.runFunction}/>
                    <ToggleButton bgColor={COLORS.red} buttonText="Cancel" runFunction={hideForm}/>
                </div>
            </form>
            {state.failedEdit &&
                <h3>Update Failed</h3>
            }
        </StyledEditForm>
        }
        </StyledFormContainer>
    )
}

