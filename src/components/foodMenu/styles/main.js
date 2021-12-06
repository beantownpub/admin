import styled from 'styled-components'

const CONFIG = require('../../content/config.json')
const FONTS = CONFIG.fonts

export const StyledMainContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    margin: auto;
    max-width: ${props => props.maxWidth || "768px"};
    padding: unset;
    width: 100%;
    h1 {
        font-family: ${FONTS.poppins};
        font-size: 2rem;
        letter-spacing: .25rem;
        margin: auto;
        padding: .25rem;
    }
`
