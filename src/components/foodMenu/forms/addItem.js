import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { SubmitButton, ToggleFormButton } from '../../elements/buttons/main'
import { StyledEditForm, StyledCreateComplete } from '../styles/formStyles'

const required = { required: 'Required' }

const reqHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

function makeSlug(name) {
    return name.replace(/ /g, "-").toLowerCase()
}

function makeSingular(name) {
    return name.replace(/ees$/, 'ee').replace(/es$/, '').replace(/s$/, '')
}

export const NewItemForm = (props) => {
    const [state, setState] = useState({
        showForm: false,
        itemCreated: false,
        failedCreate: false
    })
    const { handleSubmit, register, errors, reset } = useForm()

    const displayForm = () => {
        setState({ showForm: true })
    }

    const hideForm = () => {
        setState({ showForm: false })
    }

    const successCreate = () => {
        console.log('New item created')
        setState({ showForm: false, itemCreated: true })
        props.runFunction()
    }

    const failedCreate = () => {
        console.log('New item creation failed')
        setState({ showForm: true, failedCreate: true })
    }

    const onSubmit = values => {
        fetch(`food/items`, {
            method: 'POST',
            headers: reqHeaders,
            body: JSON.stringify({
                category_id: props.category,
                description: values.description,
                is_active: values.isActive,
                name: values.itemName,
                price: values.itemPrice,
                slug: makeSlug(values.itemName)
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
            console.log('Item Create Status: ' + data.status)
            if (data.status === 200) {
                successCreate()
            } else {
                failedCreate()
            }
        })
        .catch(err => {
            console.error('Create onSubmit ' + err)
            failedCreate()
        })
    }

    return (
        <div>
            <ToggleFormButton runFunction={displayForm} buttonText={`Add ${props.category}`}/>
        {state.showForm &&
        <StyledEditForm aria-labelledby="Add food item form">
            <h2>Add New {props.category}</h2>
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
                <SubmitButton buttonText={`Add ${makeSingular(props.category)}`} />
                <ToggleFormButton runFunction={hideForm} buttonText="Cancel" />
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
