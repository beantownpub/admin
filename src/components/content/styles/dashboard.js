import styled from 'styled-components'

export const StyledDashContainer = styled.div`
    background-color: ${props => props.backgroundColor || "unset"};
    color: ${props => props.fontColor || "unset"};
    display: flex;
    flex-flow: column wrap;
    font-family: ${props => props.fontFamily || "unset"};
    margin: ${props => props.margin || "auto"};
    padding: ${props => props.padding || "0"};
    text-transform: ${props => props.textTransform || "unset"};
    width: ${props => props.width || "100%"};
    h1 {
        letter-spacing: .25rem;
        line-height: 170%;
        margin: 2rem auto 2rem auto;
    }
    @media (min-width: 320px)
    and (max-width: 768px)
    and (orientation: portrait)
    and (-webkit-min-device-pixel-ratio: 2) {
        h1 {
            font-size: 2rem;
        }
    }
`