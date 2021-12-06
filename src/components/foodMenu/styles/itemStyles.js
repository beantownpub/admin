import styled from 'styled-components'

const CONFIG = require('../../content/config.json')
const COLORS = CONFIG.colors

export const StyledItem = styled.div`
    margin: .25rem auto;
    padding: .5rem;
    display: flex;
    flex-flow: row wrap;
    border: 1px solid ${COLORS.black};
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
        border: 1px solid ${COLORS.black};
        border-radius: 4px;
        td {
            border: 1px solid ${COLORS.black};
            border-radius: 2px;
            padding: .25rem;
            text-align: center;
        }
        th {
            background-color: ${COLORS.black};
            border: 1px solid ${COLORS.black};
            border-radius: 2px;
            font-weight: bold;
            color: ${COLORS.white};
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
