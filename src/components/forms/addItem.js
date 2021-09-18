import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
    ViewButton,
    ShowItemCreateFormButton,
    HideCategoryCreateFormButton } from '../buttons'
import { StyledEditForm, StyledCreateComplete } from '../styles/formStyles'


// const config = require('./merchConfig.json')

const required = {
    required: 'Required'
}

const reqHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

export const NewItemForm = (props) => {
    const [state, setState] = useState({
        showForm: false,
        itemCreated: false,
        failedCreate: false
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
            itemCreated: true
        })
        props.runFunction()
    }

    const failedCreate = () => {
        setState({
            showForm: true,
            failedCreate: true
        })
    }

    const onSubmit = values => {
        fetch(`${props.api}/items`, {
            method: 'POST',
            headers: reqHeaders,
            body: JSON.stringify({
                name: values.itemName,
                description: values.description,
                is_active: values.isActive,
                price: values.itemPrice,
                category: props.category
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
            console.log('Category Create Status: ' + data.status)
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
        <div>
            <ShowItemCreateFormButton runFunction={toggleForm} />
        {state.showForm &&
        <StyledEditForm>
            <h2>Add Item</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name='itemName' placeholder='Name' ref={register(required)} text="Hello" />
                <label htmlFor="isActive">Active?</label>
                    <input
                        className="check"
                        type="checkbox"
                        id="isActive"
                        name="isActive"
                        defaultChecked={true}
                        ref={register}
                    />
                <label htmlFor="isActive">Price</label>
                <input name='itemPrice' placeholder='0.00' ref={register(required)} text="Hello" />
                <label htmlFor="description">Description</label>
                <textarea
                    name='description'
                    rows='6'
                    columns='50'
                    ref={register({ required: 'Required'})}
                ></textarea>
                <ViewButton borderColor='#e2e2e2' text='Create' />
                <HideCategoryCreateFormButton runFunction={hideForm} />
            </form>
            {state.failedCreate &&
                <h3>Create Failed</h3>
            }
        </StyledEditForm>
        }
        <div>
            {state.itemCreated &&
            <StyledCreateComplete>
            <h2>Item Created</h2>
            </StyledCreateComplete>
            }
        </div>
        </div>
    )
}
