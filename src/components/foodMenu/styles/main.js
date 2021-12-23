import styled from 'styled-components'

const CONFIG = require('../../content/config.json')
const FONTS = CONFIG.fonts
const COLORS = CONFIG.colors

export const StyledDashContainer = styled.div`
    background: ${props => props.backgroundColor || "aliceblue" };
    border-radius: 1rem;
    display: flex;
    flex-flow: column wrap;
    margin: auto;
    max-width: ${props => props.maxWidth || "768px"};
    padding: ${props => props.padding || "1rem 0"};
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    h1 {
        color: ${COLORS.black};
        font-family: ${FONTS.headers};
        font-size: 1.5rem;
        font-weight: 700;
        letter-spacing: .25rem;
        margin: auto;
        padding: .5rem;
    }
`
