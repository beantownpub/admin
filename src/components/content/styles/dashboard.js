import styled from 'styled-components'


export const StyledDashContainer = styled.div`
    margin-top: ${props => props.marginTop || "auto"};
    margin-bottom: ${props => props.marginBottom || "auto"};
    margin-left: ${props => props.marginLeft || "auto"};
    margin-right: ${props => props.marginRight || "auto"};
    padding-top: ${props => props.paddingTop || "0"};
    padding-bottom: ${props => props.paddingBottom || "0"};
    padding-left: ${props => props.paddingLeft || "0"};
    padding-right: ${props => props.paddingRight || "0"};
    background-color: ${props => props.backgroundColor || "#fcba03"};
    width: ${props => props.width || "100%"};
    display: flex;
    flex-flow: column wrap;
    font-family: gotham-narrow-ultra;
    letter-spacing: .12rem;
    text-transform: uppercase;
    color: ${props => props.fontColor || "black"};
    line-height: 170%;
    h1 {
        padding: .5rem 0;
        max-width: 80%;
        font-size: 3em;
        font-family: gotham-narrow-ultra;
        line-height: 170%;
    }
    h2 {
        padding: .5rem 0;
        max-width: 80vw;
        font-family: gotham;
        font-size: 2em;
        line-height: 170%;
        text-align: ${props => props.textAlign || "initial"};
        span {
            color: #c70039;
        }
    }
    h3 {
        padding: 1rem 0;
        max-width: 80vw;
        font-family: gotham-narrow-ultra;
        font-size: 2em;
        line-height: 170%;
        letter-spacing: .25rem;
    }
    h4 {
        padding: .5rem 0;
        max-width: 40rem;
        font-family: gotham;
        font-size: 1.75rem;
        text-transform: none;
        line-height: 170%;
    }
    h5 {
        padding: .5rem 0;
        max-width: 40rem;
        font-family: satisfy;
        font-size: 1.75rem;
        letter-spacing: unset;
        text-transform: none;
        line-height: 170%;
    }
    h6 {
        padding: .5rem 0;
        max-width: 40rem;
        font-family: gotham;
        font-size: .75rem;
        text-transform: none;
        line-height: 170%;
    }
    a {
        text-decoration: none;
        color: #3fc5f0;
        font-family: gotham-medium;
        text-transform: capitalize;
    }
    article {
        padding: 2rem 0 0 0;
        max-width: 50rem;
        text-transform: none;
        font-family: gotham-medium;
    }
    p {
        padding: .5rem 0;
        max-width: 50rem;
        color: white;
        text-transform: none;
        font-family: gotham-medium;
        font-size: 1.2rem;
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