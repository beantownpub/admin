import styled from 'styled-components'

const CONFIG = require('../../content/config.json')
const COLORS = CONFIG.colors
const FONTS = CONFIG.fonts

export const StyledCategoryCard = styled.div`
    background-color: ${props => props.backgroundColor || COLORS.categoryCardBackground };
    border: .25rem solid ${props => props.borderColor || COLORS.borderGray };
    border-radius: ${props => props.borderRadius || ".75rem"};
    box-shadow: ${props => props.boxShadow || `0px 5px 20px 0px ${COLORS.boxShadowGray}`};
    display: flex;
    flex-flow: column wrap;
    font-family: ${props => props.font || FONTS.poppins};
    font-weight: ${props => props.fontWeight || "700"};
    margin: 1rem auto;
    padding: .5rem;
    width: ${props => props.width || "99%"};
    .sectionInfo {
        padding: .25rem;
    }
    .foodItems {
        background-color: ${COLORS.white};
        border: .15rem solid ${COLORS.borderGray};
        border-radius: .75rem;
        box-shadow: ${props => props.boxShadow || `0px 5px 20px 0px ${COLORS.boxShadowGray}`};
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        padding: .5rem 0;
    }
    table {
        padding: .25rem;
        text-transform: uppercase;
        width: fit-content;
        td {
            font-size: 1rem;
            padding: .25rem .5rem;
        }
    }
    h2 {
        color: ${props => props.h2Color || COLORS.red };
        margin: 0 auto;
        font-family: ${props => props.font || FONTS.poppins};
        font-size: 1.25rem;
        letter-spacing: .25rem;
        text-align: center;
        text-transform: uppercase;
        width: min-content;
        min-width: 20rem;
    }
    h4 {
        font-family: ${props => props.font || FONTS.poppins};
        font-size: 1.25rem;
        color: ${COLORS.black};
        letter-spacing: .25rem;
        text-transform: uppercase;
    }
`

export const StyledSectionContainer = styled.div`
    margin: 5rem auto;
    padding: unset;
    display: flex;
    flex-flow: column wrap;
    border: .75rem solid ${COLORS.black};
    border-radius: 6px;
    background-color: ${COLORS.white};
    width: 100%;
    h1 {
        margin: auto;
        padding: .25rem;
        font-size: 2.5rem;
        letter-spacing: .25rem;
    }
`

export const StyledItemsContainer = styled.div`
    margin: 1rem auto;
    display: flex;
    flex-flow: column wrap;
    border-radius: .5rem;
    width: 100%;
    .newItemFormButton {
        margin: .5rem auto;
        padding: 1rem;
        width: 100%;
    }
`
