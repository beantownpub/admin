import styled from 'styled-components'

export const StyledNumCartItems = styled.div`
    padding: .25rem;
    width: max-content;
    height: 5rem;
    display: flex;
    flex-flow: row nowrap;
    font-family: gotham-narrow-ultra;
    font-size: 1em;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: .09em;
    color: black;
`
export const StyledCartContainer = styled.div`
    margin: auto;
    padding: 1em;
    position: absolute;
    z-index: 1002;
    left: -35em;
    width: 365px;
    display: flex;
    background-color: white;
    flex-flow: column wrap;
    border: 1px solid #e2e2e2;
    border-radius: 6px;
    .cartList {
        margin: auto;
        width: 30em;
        display: flex;
        flex-flow: column wrap;
    }
    .cartTotal {
        padding: .5rem;
        font-family: gotham-medium;
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: .2rem;
    }
    h1 {
        margin: 0 auto;
        font-size: .25rem;
        width: min-content;
    }
    h2 {
        margin: auto;
        padding: .25em;
        font-family: gotham-narrow-ultra;
        text-transform: uppercase;
        letter-spacing: .2rem;
    }
    span {
        color: #ed1c24;
    }
`
export const StyledCartItem = styled.div`
    margin: .25em auto;
    padding: .25em;
    width: 90%;
    display: flex;
    flex-flow: column wrap;
    background-color: ${props => props.bgColor || "white"};
    border: 1px solid #e2e2e2;
    border-radius: .4em;
    font-size: 1em;
    text-align: center;
    letter-spacing: .09em;
    .grid {
        margin: auto;
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: min-content min-content min-content min-content min-content;
        grid-gap: 1rem;
        font-size: 1.25rem;
        text-align: center;
        font-family: Proxima Nova,Helvetica Neue,Helvetica,Arial,sans-serif;
    }
    .name {
        text-align: left;
        font-family: Proxima Nova,Helvetica Neue,Helvetica,Arial,sans-serif;
        font-size: .75em;
        min-width: 42px;
    }
    .size, .quantity {
        font-family: gotham-medium;
        font-size: .75em;
        min-width: 42px;
    }

    .description {
        text-transform: none;
        font-family: gotham;
    }
    .menu_list {
        display: none;
    }
`
