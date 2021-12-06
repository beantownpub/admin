import styled from 'styled-components'

const CONFIG = require('../content/config.json')
const COLORS = CONFIG.colors
const FONTS = CONFIG.fonts

export const StyledLoginContainer = styled.div`
    margin: 10rem auto;
    display: flex;
    flex-flow: column wrap;
    width: 100%;
    h1 {
        margin: auto;
        padding: .25rem;
        font-size: 1.5rem;
        color: ${COLORS.yellow};
        font-family: gotham;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: .3rem;
    }
`

export const StyledLoginForm = styled.div`
    margin: 2rem auto;
    display: flex;
    flex-flow: column wrap;
    width: 355px;
    form {
        display: flex;
        flex-flow: column wrap;
        input {
            margin: .5rem 0;
            padding: .5rem;
            width: 350px;
            height: 40px;
            border: .05rem solid #e2e2e2;
            border-radius: 6px;
        }
        label {
            margin: auto .25rem;
            font-family: gotham-narrow-ultra;
            letter-spacing: .25rem;
            text-transform: uppercase;
        }
    }
    h2 {
        padding: .25rem;
        font-size: 1.5rem;
        color: white;
        font-family: gotham;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: .25rem;
    }
    h3 {
        font-size: 1rem;
        color: white;
        font-family: gotham;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: .25rem;
    }
`

export const StyledLogin = styled.div`
    display: flex;
    flex-flow: column wrap;
    font-family: gotham;
    font-weight: bold;
    margin: 10rem auto;
    width: 355px;
    h2 {
        color: white;
        letter-spacing: .25rem;
        margin: .5rem auto;
        padding: .25rem;
        font-family: ${FONTS.poppins};
        font-size: 1.5rem;
        font-weight: bold;
        text-transform: uppercase;
    }
    a {
        background-color: #fcba03;
        border: .05rem solid #e2e2e2;
        border-radius: 6px;
        color: black;
        font-family: gotham-narrow-ultra;
        text-align: center;
        letter-spacing: .25rem;
        margin: .5rem auto;
        padding: 2rem 2.5rem;
        text-decoration: none;
        text-transform: uppercase;
    }
`
