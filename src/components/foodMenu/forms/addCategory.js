import React, { useState } from "react"
import Popup from "react-popup"
import { useForm } from "react-hook-form"
import { SubmitButton, ToggleButton } from "../../elements/buttons/main"
import { StyledEditForm } from "../styles/formStyles"

const CONFIG = require("../../content/config.json")
const COLORS = CONFIG.colors
const required = { required: "Required" }

const reqHeaders = {
    "Accept": "application/json",
    "Content-Type": "application/json"
}

function makeSlug(name) {
    return name.replace(/ /g, "-").toLowerCase()
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

    const successCreate = (name) => {
        setState({ showForm: false, categoryCreated: true })
        props.hideForm()
        props.reRenderFunction()
        Popup.alert(`Category ${name} created`)
    }

    const failedCreate = () => {
        setState({ showForm: true, failedCreate: true })
    }

    const onSubmit = values => {
        console.log('Values: ' + values)
        fetch(`food/categories`, {
            method: "POST",
            headers: reqHeaders,
            body: JSON.stringify({
                name: values.categoryName,
                is_active: values.isActive,
                slug: makeSlug(values.categoryName),
                location: values.location
            })
        })
        .catch(err => { alert("Network error: " + err) })
        .then(response => {
            if (!response.ok) {
                return response.json().then(
                errorInfo => Promise.reject(errorInfo)) //UPDATE HERE
            }
            return response //UPDATE HERE
        })
        .then(data => {
            console.log("Category Create Status: " + data.status)
            if (data.status === 200) {
                successCreate(values.categoryName)
            } else {
                failedCreate()
            }
        })
        .catch(err => {
            console.error("New category form " + err)
            failedCreate()
        })
    }

    return (
        <StyledEditForm boxShadow={props.boxShadow} aria-labelledby="Add category form">
            <h2>New Menu Section</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name='location' defaultValue={props.location} ref={register(required)} type="hidden"/>
                <input className="inputField" name="categoryName" placeholder="Name" ref={register(required)}/>
                <div className="checkField">
                    <label htmlFor="isActive">{"Active? (Sections marked active are shown on live menu)"}</label>
                    <input
                        className="check"
                        type="checkbox"
                        id="isActive"
                        name="isActive"
                        defaultChecked={true}
                        ref={register}
                    />
                </div>
                <label htmlFor="description">Description</label>
                <textarea
                    name="description"
                    rows="6"
                    columns="50"
                    ref={register()}
                ></textarea>
                <div className="alignHorizontally autoMargin">
                    <SubmitButton bgColor={COLORS.dodgerBlue} buttonText="Create"/>
                    <ToggleButton bgColor={COLORS.red} runFunction={props.hideForm} buttonText="Cancel"/>
                </div>
            </form>
            {state.failedCreate &&
                <h3>Create Failed</h3>
            }
        </StyledEditForm>
    )
}
