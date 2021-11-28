import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { SubmitButton, ToggleFormButton } from '../../elements/buttons/main'
import { StyledEditForm } from '../styles/formStyles'

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

    const onSubmit = values => {
        fetch('/categories', {
            method: 'put',
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
        <div>
            <ToggleFormButton runFunction={displayForm} buttonText="Edit" />
        {state.showForm &&
        <StyledEditForm>
            <h2 className="editForm">Edit Category</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="categoryName">Category Name</label>
                    <input name='categoryName' defaultValue={props.name} ref={register(required)} />
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
                <SubmitButton runFunction={props.runFunction} buttonText="Update"/>
                <ToggleFormButton runFunction={hideForm} buttonText="Cancel" />
            </form>
            {state.failedEdit &&
                <h3>Update Failed</h3>
            }
        </StyledEditForm>
        }
        <div>
            {state.categoryEdited &&
            <div>
            <h2>Category Created</h2>
            <a href="/dashboard">Proceed To Dashboard</a>
            </div>
            }
        </div>
        </div>
    )
}
