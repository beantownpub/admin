import styled from 'styled-components'
const CONFIG = require('../config.json')
const COLORS = CONFIG.colors
const FONTS = CONFIG.fonts

export const StyledFooter = styled.div`
    display: flex;
    margin: auto;
    padding: 2rem 0;
    width: 100%;
    footer {
        color: white;
        font-family: ${FONTS.poppins};
        font-weight: 600;
        letter-spacing: .2em;
        margin: auto;
        text-align: center;
        text-shadow: .1em .15em .35em #000000;
        text-transform: uppercase;
    }
    img {
        margin: auto;
        padding: .5rem 0;
        max-width: 20rem;
    }
    h2 {
        margin: 1rem auto;
    }
    h3 {
        margin: auto;
        padding: .5rem 0;
        font-size: 1.65em;
    }
    h4 {
        margin: auto;
        padding: 1rem 0;
        font-family: satisfy;
        font-size: 2rem;
        color: #fcba03;
        text-transform: capitalize;
        letter-spacing: none;
    }
`
