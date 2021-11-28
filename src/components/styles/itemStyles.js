import styled from 'styled-components'

export const StyledItem = styled.div`
    margin: 1rem auto;
    padding: 1rem;
    display: flex;
    flex-flow: row wrap;
    border: 1px solid black;
    border-radius: 6px;
    background: #fafafa;
    h2 {
        width: 100%;
        letter-spacing: .25rem;
        border: unset;
        font-family: 'Raleway', Arial, sans-serif;
        color: red;
    }
    .priceDisplay {
        padding: 1rem;
        font-weight: bold;
        display: grid;
        grid-template-columns: 50px 50px;
        grid-column-gap: 15px;
    }
    .description {
        display: flex;
        flex-flow: column wrap;
        font-family: 'Raleway', Arial, sans-serif;
        width: 100%;
        p {
            padding: 1.5rem;
            width: 99%;
            background-color: white;
            border-radius: 6px;
            color: black;
            border: .5px solid black;
        }
        h3 {
            text-transform: uppercase;
        }
    }
`
