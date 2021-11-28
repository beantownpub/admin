import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { SubmitButton, ToggleFormButton } from '../../elements/buttons/main'
import { StyledEditForm } from '../styles/formStyles'

const required = { required: 'Required' }

const reqHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

export const EditItemForm = (props) => {
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
        setState({
            showForm: true,
            failedEdit: true
        })
    }

    const onSubmit = values => {
        fetch(`food/items/${values.itemSlug}`, {
            method: 'put',
            headers: reqHeaders,
            body: JSON.stringify({
                category_id: values.category,
                description: values.description,
                is_active: values.isActive,
                name: values.itemName,
                price: values.itemPrice,
                slug: values.itemSlug
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
            console.log('Item Edit Status: ' + data.status)
            if (data.status === 200) {
                successCreate()
            } else {
                failedCreate()
            }
        })
        .catch(err => {
            console.error('Edit onSubmit error: ' + err)
            failedCreate()
        })
    }

    return (
        <div>
            <ToggleFormButton runFunction={displayForm} buttonText="Edit"/>
        {state.showForm &&
        <StyledEditForm>
            <h2 className="editForm">Edit Item</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="itemName">Name</label>
                <input name='itemName' defaultValue={props.name} ref={register(required)} />
                <input name='itemSlug' defaultValue={props.slug} ref={register(required)} type="hidden" />
                <input name='category' defaultValue={props.category} ref={register(required)} type="hidden" />
                <div className="checkField">
                <label htmlFor="isActive">Active?</label>
                    <input
                        className="check"
                        type="checkbox"
                        id="isActive"
                        name="isActive"
                        defaultChecked={props.isActive}
                        ref={register}
                    />
                </div>
                <label htmlFor="itemPrice">Price</label>
                <input name='itemPrice' ref={register(required)} defaultValue={props.price} />
                <label htmlFor="description">Description</label>
                    <textarea
                        name='description'
                        rows='6'
                        columns='50'
                        ref={register({ required: 'Required'})}
                        defaultValue={props.description}
                    ></textarea>
                <SubmitButton runFunction={props.runFunction} buttonText="Update Item"/>
                <ToggleFormButton runFunction={hideForm} buttonText="Cancel"/>
            </form>
            {state.failedEdit &&
                <h3>Update Failed</h3>
            }
        </StyledEditForm>
        }
        </div>
    )
}
