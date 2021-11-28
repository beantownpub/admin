import React from 'react'
import { StyledButton } from './styles'

const CONFIG = require('../../content/config.json')
const COLORS = CONFIG.colors

export const ToggleFormButton = (props) => {
    const handleClick = () => {
        props.runFunction()
    }
    return (
        <StyledButton borderColor={props.borderColor || COLORS.black} aria-labelledby="Toggle button">
            <button onClick={handleClick}>{props.buttonText}</button>
        </StyledButton>
    )
}

export const SubmitButton = (props) => {
    const handleClick = () => {
        if (props.runFunction) {
            props.runFunction()
        }
    }
    return (
        <StyledButton borderColor={props.borderColor || COLORS.black} aria-labelledby="Submit button">
            <button onClick={handleClick}>{props.buttonText}</button>
        </StyledButton>
    )
}

export const DeleteButton = (props) => {
    const handleClick = () => {
        const options = {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: props.name
            })
        }
        fetch(props.endPoint, options)
            .then(response => response.json())
            .catch(error => console.log(error))
        props.runFunction()
    }
    return (
        <StyledButton borderColor={COLORS.black}>
            <button onClick={handleClick}>Delete</button>
        </StyledButton>
    )
}
