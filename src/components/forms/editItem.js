import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
    CategoryEditButton,
    ShowCategoryEditFormButton,
    HideCategoryCreateFormButton } from '../buttons'
import { StyledEditForm, StyledLogin } from '../styles/formStyles'


// const config = require('./merchConfig.json')

const required = {
    required: 'Required'
}

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

    const toggleForm = () => {
        setState({
            showForm: true
        })
    }

    const hideForm = () => {
        setState({
            showForm: false
        })
    }

    const successCreate = () => {
        setState({
            showForm: false,
            categoryEdited: true
        })
        props.runFunction()
    }

    const failedCreate = () => {
        setState({
            showForm: true,
            failedEdit: true
        })
    }

    const onSubmit = values => {
        fetch('/categories', {
            method: 'put',
            headers: reqHeaders,
            body: JSON.stringify({
                name: values.categoryName,
                has_sizes: values.hasSizes,
                is_active: values.isActive
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
            console.log('Product Edit Status: ' + data.status)
            if (data.status === 204) {
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
        <div>
            <ShowCategoryEditFormButton runFunction={toggleForm} />
        {state.showForm &&
        <StyledEditForm>
            <h2 className="editForm">Edit Item</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="itemName">Name</label>
                <input name='itemName' defaultValue={props.name} ref={register(required)} />
                {props.haSizes &&
                    <div className="checkField">
                    <label htmlFor="hasSizes">Has more than one size?</label>
                    <input
                        className="check"
                        type="checkbox"
                        id="hasSizes"
                        name="hasSizes"
                        defaultChecked={props.hasSizes}
                        ref={register}
                    />
                    </div>
                }
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
                <CategoryEditButton Product={props.name} runFunction={props.runFunction}/>
                <HideCategoryCreateFormButton runFunction={hideForm} />
            </form>
            {state.failedEdit &&
                <h3>Update Failed</h3>
            }
        </StyledEditForm>
        }
        <div>
            {state.categoryEdited &&
            <StyledLogin>
            <h2>Product Created</h2>
            <a href="/dashboard">Proceed To Dashboard</a>
            </StyledLogin>
            }
        </div>
        </div>
    )
}
