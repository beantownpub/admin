import styled from 'styled-components'
const CONFIG = require('../config.json')
const COLORS = CONFIG.colors
const FONTS = CONFIG.fonts

export const StyledDashContainer = styled.div`
    background-color: ${props => props.bgColor || "unset"};
    border: ${props => props.border || "unset"};
    border-radius: ${props => props.borderRadius || "unset"};
    display: ${props => props.display || "flex"};
    flex-flow: ${props => props.flexFlow || "column wrap"};
    margin: ${props => props.margin || "auto"};
    max-width: ${props => props.maxWidth || "unset"};
    padding: ${props => props.padding || "0"};
    width: ${props => props.width || "99vw"};
    h1 {
        color: ${COLORS.white};
        font-family: ${FONTS.headers};
        font-size: 1.5rem;
        font-weight: 700;
        letter-spacing: .25rem;
        margin: auto;
        padding: 1rem;
        text-transform: uppercase;
    }
`

export const StyledPageContainer = styled.div`
    background-color: ${props => props.backgroundColor || "unset"};
    display: ${props => props.display || "flex"};
    flex-flow: ${props => props.flexFlow || "column wrap"};
    margin: ${props => props.margin || "unset"};
    padding: ${props => props.padding || "unset"};
    text-transform: ${props => props.textTransform || "unset"};
    width: ${props => props.width || "100%"};
`
