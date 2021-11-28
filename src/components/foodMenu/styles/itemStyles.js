import styled from 'styled-components'

export const StyledItem = styled.div`
    margin: .25rem auto;
    padding: .5rem;
    display: flex;
    flex-flow: row wrap;
    border: 1px solid black;
    border-radius: 4px;
    background: #fafafa;
    width: 99%;
    h2 {
        margin: auto;
        letter-spacing: .25rem;
        border: unset;
        font-family: 'Raleway', Arial, sans-serif;
        color: red;
    }
    table {
        width: 100%;
        border: 1px solid #000000;
        border-radius: 4px;
        td {
            border: 1px solid #000000;
            border-radius: 2px;
            padding: .25rem;
            text-align: center;
        }
        th {
            background-color: #000000;
            border: 1px solid #000000;
            border-radius: 2px;
            font-weight: bold;
            color: white;
        }
    }
    .active {
        color: green;
    }
    .notActive {
        color: red;
    }
    .narrowColumn {
        width: 15%;
    }
    .descriptionColumn {
        width: 70%;
    }
    .tableData {
        padding: .25rem;
    }
    .tableItemDescription {
        padding: .25rem;
        text-align: left;
        text-transform: none;
    }
`
