import styled from 'styled-components'

export const StyledProduct = styled.div`
    margin: 1rem auto;
    padding: 1rem;
    display: flex;
    flex-flow: row wrap;
    border: 1px solid black;
    border-radius: 6px;
    h2 {
        width: 100%;
        letter-spacing: .25rem;
        border: unset;
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
        width: 80%;
        p {
            padding: 1.5rem;
            width: 95%;
            background-color: white;
            border-radius: 6px;
            color: black
        }
        h3 {
            text-transform: uppercase;
        }
    }
`
