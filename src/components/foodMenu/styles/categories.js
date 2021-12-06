import styled from 'styled-components'

const CONFIG = require('../../content/config.json')
const COLORS = CONFIG.colors
const FONTS = CONFIG.fonts

export const StyledCategoryCard = styled.div`
    background-color: ${props => props.backgroundColor || COLORS.antiFlashWhite };
    border: .25rem solid ${props => props.borderColor || COLORS.spanishGray };
    border-radius: ${props => props.borderRadius || ".75rem"};
    display: flex;
    flex-flow: column wrap;
    font-family: ${props => props.font || FONTS.poppins};
    font-weight: ${props => props.fontWeight || "700"};
    margin: 1rem auto;
    padding: .5rem;
    width: ${props => props.width || "99%"};
    .categoryName {
        color: ${COLORS.red};
        padding-left: .5rem;
    }
    .isActive {
        display: flex;
        flex-flow: row nowrap;
        width: 100%;
        .active {
            padding-left: .5rem;
            h4 {
                color: ${COLORS.green};
            }
        }
        .notActive {
            padding-left: .5rem;
            h4 {
                color: ${COLORS.red};
            }
        }
    }
    .itemsBorder {
        border: .15rem solid ${COLORS.black};
        border-radius: .75rem;
        display: flex;
        flex-flow: column wrap;
        margin: 1rem auto;
        padding: .5rem;
        width: 95%;
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
    h3 {
        font-family: gotham;
        font-size: 1.25rem;
        letter-spacing: .25rem;
        text-transform: none;
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
