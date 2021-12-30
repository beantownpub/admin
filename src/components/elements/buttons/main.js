import React from 'react'
import Popup from "react-popup"
import { StyledButton } from './styles'

const CONFIG = require('../../content/config.json')
const COLORS = CONFIG.colors

export const Button = (props) => {
    return (
        <StyledButton
            aria-labelledby={props.ariaLabel || "Button component"}
            backgroundColor={props.buttonStyles.bgColor}
            border={props.buttonStyles.border}
            borderRadius={props.buttonStyles.borderRadius}
            fontFamily={props.buttonStyles.fontFamily}
            fontSize={props.buttonStyles.fontSize}
            letterSpacing={props.buttonStyles.letterSpacing}
            margin={props.buttonStyles.margin}
            maxWidth={props.buttonStyles.maxWidth}
            outerMargin={props.buttonStyles.outerMargin}
            outerPadding={props.buttonStyles.outerPadding}
            padding={props.buttonStyles.padding}
            textColor={props.buttonStyles.textColor}
            textAlign={props.buttonStyles.textAlign}
            textDecoration={props.buttonStyles.textDecoration}
            textTransform={props.buttonStyles.textTransform}
            width={props.buttonStyles.width}
        >
            <button onClick={props.clickHandler}>{props.buttonText}</button>
        </StyledButton>
    )
}

export const ToggleButton = (props) => {
    const handleClick = () => {
        props.runFunction()
    }
    return (
        <Button
            clickHandler={handleClick}
            buttonStyles={props}
            buttonText={props.buttonText}
        />
    )
}

export const SubmitButton = (props) => {
    const handleClick = () => {
        if (props.runFunction) {
            props.runFunction()
        }
    }
    return (
        <Button
            clickHandler={handleClick}
            buttonStyles={props}
            buttonText={props.buttonText}
        />
    )
}

export const LinkButton = (props) => {
    console.log('Link URL: ' + props.url)
    const handleClick = () => {
        window.location.href = props.url
    }
    return (
        <Button
            clickHandler={handleClick}
            buttonStyles={props}
            buttonText={props.buttonText}
        />
    )
}
