import styled from 'styled-components'

const CONFIG = require('../../content/config.json')
const COLORS = CONFIG.colors

export const iconStyle = {
    margin: 'auto .5rem',
    color: '#e6cb00',
    fontSize: '1rem'
}

export const StyledButton = styled.div`
    margin: ${props => props.outerMargin || "unset"};
    padding: ${props => props.outerPadding || ".5rem"};
    button {
        background-color: ${props => props.backgroundColor || COLORS.white};
        border: ${props => props.border || `.15rem solid ${COLORS.black}`};
        border-radius: ${props => props.borderRadius || ".5rem"};
        color: ${props => props.textColor || COLORS.white};
        font-family: ${props => props.fontFamily || "gotham-narrow-ultra"};
        font-size: ${props => props.fontSize || "1rem"};
        letter-spacing: ${props => props.letterSpacing || ".2rem"};
        margin: ${props => props.margin || ".25rem auto"};
        padding: ${props => props.padding || "1rem"};
        text-align: ${props => props.textAlign || "center"};
        text-decoration: ${props => props.textDecoration || "none"};
        text-transform: ${props => props.textTransform || "uppercase"};
        width: ${props => props.width || "12rem"};
    }
`
