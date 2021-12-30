import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { DeleteButton } from '../../elements/buttons/delete'
import { SubmitButton, ToggleButton } from '../../elements/buttons/main'
import { StyledEditForm, StyledFormContainer } from '../styles/formStyles'
import { config, getOptions } from '../../../utils/main'

const COLORS = config.colors
const required = { required: 'Required' }

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
        fetch(`/food/products/${props.location}`, {
            method: 'put',
            headers: getOptions.headers,
            body: JSON.stringify({
                category_id: values.category,
                description: values.description,
                is_active: values.isActive,
                name: values.itemName,
                price: values.itemPrice,
                slug: values.itemSlug,
                location: props.location
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
        <StyledFormContainer aria-labelledby="Edit food item form container">
            <div className="alignButtonsHorizontally">
                <ToggleButton bgColor={COLORS.dodgerBlue} runFunction={displayForm} buttonText="Edit"/>
                <DeleteButton bgColor={COLORS.red} name={props.slug} runFunction={props.runFunction} endPoint={`food/items/${props.location}`} itemType="item" sku={props.sku}/>
            </div>
        {state.showForm &&
        <StyledEditForm aria-labelledby="Edit food item form">
            <h2 className="editForm">Edit Item</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="itemName">Name</label>
                <input className="inputField" name='itemName' defaultValue={props.name} ref={register(required)}/>
                <input name='itemSlug' defaultValue={props.slug} ref={register(required)} type="hidden"/>
                <input name='category' defaultValue={props.category} ref={register(required)} type="hidden"/>
                <div className="checkField">
                <label htmlFor="isActive">{"Active? (Items marked active are shown on live menu)"}</label>
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
                <input className="inputField" name='itemPrice' ref={register(required)} defaultValue={props.price}/>
                <label htmlFor="description">Description</label>
                    <textarea
                        name='description'
                        rows='6'
                        columns='50'
                        ref={register()}
                        defaultValue={props.description}
                    ></textarea>
                <div className="alignHorizontally autoMargin">
                    <SubmitButton bgColor={COLORS.dodgerBlue} border={`.15rem solid ${COLORS.black}`} buttonText="Update Item" runFunction={props.runFunction}/>
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
