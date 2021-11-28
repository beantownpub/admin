import styled from 'styled-components'

export const StyledEditForm = styled.div`
    margin: 2rem auto;
    padding: 1rem;
    display: flex;
    flex-flow: column wrap;
    width: 95%;
    border: .05rem solid #e2e2e2;
    border-radius: 4px;
    background-color: aliceblue;
    form {
        padding: 1rem;
        display: flex;
        flex-flow: column wrap;
        input {
            margin: .5rem 0;
            padding: .5rem;
            width: 300px;
            height: 40px;
            border: .05rem solid #e2e2e2;
            border-radius: 6px;
        }
        label {
            margin: auto .25rem;
            font-family: gotham-narrow-ultra;
            letter-spacing: .25rem;
            text-transform: uppercase;
        }
    }
    .editForm {
        h2 {
            padding: .05rem;
            font-size: 1.25rem;
            color: blue;
            font-family: gotham-narrow-ultra;
            text-transform: uppercase;
            letter-spacing: .25rem;
        }
    }
    h3 {
        font-size: 1rem;
        color: red;
        font-family: gotham;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: .25rem;
    }
    .check {
        margin-left: 1rem;
        height: 15px;
        width: 15px;
    }
    .checkField {
        margin-top: .5rem;
        margin-bottom: .5rem;
        display: flex;
        flex-flow: row nowrap;
    }
`

export const StyledCreateComplete = styled.div`
    h2 {
        color: red;
    }
`
