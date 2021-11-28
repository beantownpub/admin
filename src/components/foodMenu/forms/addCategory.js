import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { SubmitButton, ToggleFormButton } from '../../elements/buttons/main'
import { StyledEditForm } from '../styles/formStyles'

const required = { required: 'Required' }

const reqHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

export const NewCategoryForm = (props) => {
    const [state, setState] = useState({
        showForm: false,
        categoryCreated: false,
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
        setState({ showForm: false, categoryCreated: true })
        props.runFunction()
    }

    const failedCreate = () => {
        setState({ showForm: true, failedCreate: true })
    }

    const onSubmit = values => {
        fetch(`${props.api}/categories`, {
            method: 'POST',
            headers: reqHeaders,
            body: JSON.stringify({
                name: values.categoryName,
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
            <ToggleFormButton runFunction={displayForm} buttonText="Foo Cancel"/>
        {state.showForm &&
        <StyledEditForm>
            <h2>Create Category</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name='categoryName' placeholder='Name' ref={register(required)} text="Hello Asshole" />
                <label htmlFor="isActive">Active?</label>
                    <input
                        className="check"
                        type="checkbox"
                        id="isActive"
                        name="isActive"
                        defaultChecked={true}
                        ref={register}
                    />
                <SubmitButton buttonText='Create' />
                <ToggleFormButton runFunction={hideForm} />
            </form>
            {state.failedCreate &&
                <h3>Create Failed</h3>
            }
        </StyledEditForm>
        }
        <div>
            {state.categoryCreated &&
            <div>
            <h2>Category Created</h2>
            <a href="/dashboard">Proceed To Dashboard</a>
            </div>
            }
        </div>
        </div>
    )
}
