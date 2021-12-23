import styled from 'styled-components'

const CONFIG = require('../../content/config.json')
const COLORS = CONFIG.colors
const FONTS = CONFIG.fonts

export const StyledEditForm = styled.div`
    background-color: ${props => props.backgroundColor || COLORS.formWhite};
    border: .15rem solid ${COLORS.shadowGray};
    border-radius: .5rem;
    box-shadow: ${props => props.boxShadow || `.25rem .25rem 1rem .5rem ${COLORS.boxShadowGray}`};
    display: flex;
    flex-flow: column wrap;
    margin: ${props => props.outerMargin || "1rem auto"};
    max-width: 99vw;
    padding: 1rem;
    width: ${props => props.width || "100%"};
    form {
        margin: auto;
        padding: 1rem;
        display: flex;
        flex-flow: column wrap;
        width: 100%;
        max-width: 35rem;
        input {
            margin: .5rem 0;
            padding: .5rem;
            max-width: 95vw;
            border: .05rem solid ${COLORS.dimGray};
            border-radius: .5rem;
        }
        label {
            margin: auto .25rem;
            font-family: ${FONTS.poppins};
            font-weight: 700;
            text-align: left;
            text-transform: uppercase;
        }
    }
    h2 {
        font-family: ${FONTS.poppins};
        font-size: 1rem;
        margin: auto;
    }
    .inputField {
        height: 35px;
    }
    .check {
        width: 3rem;
    }
    .checkField {
        margin-top: .5rem;
        margin-bottom: .5rem;
        display: flex;
        flex-flow: row nowrap;
    }
`

export const StyledFormContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    margin: auto;
    width: 100%;
    animation-duration: .1s;
    animation-name: slidein;
    .alignButtonsHorizontally {
        display: flex;
        flex-flow: row nowrap;
    }
    @keyframes slidein {
        from {
            margin-left: 100%;
            width: 300%;
        }
        to {
            margin-left: 0%;
            width: 100%;
        }
    }
`