import styled from 'styled-components'

export const StyledMerchContainer = styled.div`
    margin: auto;
    display: flex;
    flex-flow: row wrap;
    .products {
        margin: 0 auto;
        display: flex;
        flex-flow: column wrap;
        width: max-content;
        height: max-content;

    }
    .categoryContainer {
        display: flex;
        flex-flow: row wrap;
        h1 {
            margin: auto;
            width: 100%;
            color: #fcba03;
        }
    }
    .category {
        margin: 0 auto;
        display: flex;
        flex-flow: row wrap;
        width: max-content;
        height: max-content;
        max-width: 80vw;
    }
    h1 {
        margin: .25rem auto;
        padding: .5em;
        width: min-content;
        text-align: center;
        font-size: 1.5em;
        font-family: gotham-narrow-ultra;
        text-transform: uppercase;
        letter-spacing: .1em;
    }
    @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
        .merchNav {
            margin-top: 2rem;
            position: unset;
            bottom: unset;
            width: 100vw;
            height: max-content;
            background: unset;
        }
        .products {
            max-width: unset;
            width: min-content;
        }
        .category {
            max-width: unset;
            width min-content;
        }
    }
    @media only screen and (min-device-width: 300px) and (max-device-width: 374px) and (-webkit-min-device-pixel-ratio: 2) {
        .merchNav {
            margin-top: 2rem;
            position: unset;
            bottom: unset;
            width: 100vw;
            height: max-content;
            background: unset;
        }
        .products {
            max-width: unset;
            width: min-content;
        }
        .category {
            max-width: unset;
            width min-content;
        }
    }
`
