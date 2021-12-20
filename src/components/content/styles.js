import styled from 'styled-components'

export const StyledLink = styled.div`
    a {
        margin: auto;
        padding: .5em 0;
        display: block;
        position: relative;
        font-size: 1.5em;
        font-weight: 700;
        letter-spacing: .15em;
        text-transform: uppercase;
        left: -17em;
        font-family: 'Raleway', Arial, sans-serif;
        color: white;
        text-decoration: none;
    }
    a:hover {
        color: #7cef7c;
    }
`

export const StyledAnchor = styled.div`
    display: flex;
    a {
        margin: .25rem;
        padding: 1rem;
        width: ${props => props.width || "12rem"};
        height: min-content;
        font-family: gotham-narrow-ultra;
        background-color: ${props => props.bgColor || "white"};
        border: 1px solid ${props => props.borderColor || "white"};
        border-radius: 6px;
        text-decoration: none;
        font-size: 1rem;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: .2rem;
        color: black;
    }
`