import React, { useState } from "react"
import { useForm } from "react-hook-form"
import Popup from "react-popup"
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

function makeSingular(name) {
    return name.replace(/ees$/, "ee").replace(/es$/, "").replace(/s$/, "")
}

export const NewItemForm = (props) => {
    const [state, setState] = useState({
        showForm: false,
        itemCreated: false,
        failedCreate: false
    })
    const { handleSubmit, register, errors, reset } = useForm()

    const successCreate = (name) => {
        console.log("New item created")
        setState({ showForm: false, itemCreated: true })
        props.hideForm()
        props.runFunction()
        Popup.alert(`Food item ${name} created`)
    }

    const failedCreate = () => {
        console.log("New item creation failed")
        setState({ showForm: true, failedCreate: true })
    }

    const onSubmit = values => {
        console.log('Submitting new food item')
        fetch(`food/items/${props.location}`, {
            method: "POST",
            headers: reqHeaders,
            body: JSON.stringify({
                category_id: props.category,
                description: values.description,
                is_active: values.isActive,
                name: values.itemName,
                price: values.itemPrice,
                slug: makeSlug(values.itemName),
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
            console.log("Item Create Status: " + data.status)
            if (data.status === 200) {
                successCreate(values.itemName)
            } else {
                failedCreate()
            }
        })
        .catch(err => {
            console.error("Create onSubmit " + err)
            failedCreate()
        })
    }

    return (
        <div>
        <StyledEditForm aria-labelledby="Add food item form">
            <h2>Add New {makeSingular(props.category)}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="inputField" name="itemName" placeholder="Name" ref={register(required)}/>
                <input name="location" defaultValue={props.location} ref={register(required)} type="hidden"/>
                <div className="checkField">
                    <label htmlFor="isActive">{"Active? (Items marked active are shown on live menu)"}</label>
                    <input
                        className="check"
                        type="checkbox"
                        id="isActive"
                        name="isActive"
                        defaultChecked={true}
                        ref={register}
                    />
                </div>
                <label htmlFor="isActive">Price</label>
                <input className="inputField" name="itemPrice" placeholder="0.00" ref={register(required)} text="Hello" />
                <label htmlFor="description">Description</label>
                <textarea
                    name="description"
                    rows="6"
                    columns="50"
                    ref={register()}
                ></textarea>
                <div className="alignHorizontally autoMargin">
                    <SubmitButton bgColor={COLORS.okStatusGreen} buttonText="Add Item" />
                    <ToggleButton bgColor={COLORS.red} runFunction={props.hideForm} buttonText="Cancel" />
                </div>
            </form>
            {state.failedCreate &&
                <h3>Create Failed</h3>
            }
        </StyledEditForm>
        </div>
    )
}
