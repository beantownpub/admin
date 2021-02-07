import styled from 'styled-components'

export const StyledCategoryCard = styled.div`
    margin: 1rem auto;
    padding: 1rem;
    display: flex;
    flex-flow: column wrap;
    width: 400px;
    font-family: gotham;
    font-weight: bold;
    border: 2px solid #e2e2e2;
    border-radius: 6px;
    background-color: gainsboro;
    .isActive {
        padding: 1rem;
        font-weight: bold;
        display: grid;
        grid-template-columns: 50px 50px;
        grid-column-gap: 15px;
        .active {
            color: green;
        }
        .notActive {
            color: red;
        }
    }
    .buttonsDisplay {
        display: flex;
        flex-flow: row nowrap;
    }
    h2 {
        padding: .25rem;
        border-bottom: 1px solid black;
        font-family: gotham-narrow-ultra;
        font-size: 1.5rem;
        letter-spacing: .25rem;
        text-transform: uppercase;
    }
    h3 {
        font-family: gotham;
        font-size: 1.25rem;
        letter-spacing: .25rem;
        text-transform: none;
    }
    h4 {
        font-family: gotham;
        font-size: 1.25rem;
        color: red;
        letter-spacing: .25rem;
        text-transform: none;
    }
`

export const StyledCategoriesContainer = styled.div`
    margin: 5rem auto;
    display: flex;
    flex-flow: column wrap;
    border: 1px solid black;
    border-radius: 6px;
    background-color: whitesmoke;
    h1 {
        margin: auto;
        padding: .25rem;
        font-size: 2.5rem;
        letter-spacing: .25rem;
    }
`

export const StyledProductsContainer = styled.div`
    margin: 1rem auto;
    display: flex;
    flex-flow: column wrap;
    border-top: 1px solid black;
`

export const StyledButton = styled.div`
    button {
        margin: .5rem;
        width: 10rem;
        height: 3rem;
        background-color: blue;
        font-family: gotham;
        text-transform: uppercase;
        letter-spacing: .25rem;
        color: white;
        border: none;
        border-radius: 6px;
    }
`