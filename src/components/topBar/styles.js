import styled from 'styled-components'
const CONFIG = require('../content/config.json')
const COLORS = CONFIG.colors

export const StyledHamburger = styled.div`
    .hamburger {
    position: fixed;
    z-index: 1000;
    margin: .25em;
    padding: 0;
    width: 3em;
    height: 2.75em;
    border: none;
    text-indent: 2.5em;
    font-size: 1.5em;
    color: transparent;
    background: white;
    border-radius: .35em;
    opacity: .8;
    left: .5rem;
    top: 1em;
    }
    .hamburger::before {
        position: absolute;
        top: 0.5em;
        right: 0.5em;
        bottom: 0.5em;
        left: 0.5em;
        background: linear-gradient(#373a47 20%, transparent 20%, transparent 40%, #373a47 40%, #373a47 60%, transparent 60%, transparent 80%, #373a47 80%);
        content: '';
        font-family: 'Raleway', Arial, sans-serif;
        color: #fbfb0e;
    }
    @media (min-width: 1000px)
    and (-webkit-min-device-pixel-ratio: 2) {
        .hamburger {
            display: none;
        }
    }
`

export const StyledCloseMenu = styled.div`
    .menu_close {
        width: 1rem;
        height: 1rem;
        position: absolute;
        right: 1em;
        top: 1em;
        overflow: hidden;
        text-indent: 1em;
        font-size: 0.75em;
        border: none;
        background: transparent;
        color: transparent;
    }
    .menu_close::before,
    .menu_close::after {
        content: '';
        position: absolute;
        width: 3px;
        height: 100%;
        top: 0;
        left: 50%;
        background: #bdc3c7;
    }
    .menu_close::before {
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
    }
    .menu_close::after {
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }
`

export const StyledTopNav = styled.div`
    .top_nav {
        display: flex;
        flex-direction: row;
        margin: auto;
        position: fixed;
        top: 1em;
        right: 1vw;
        a {
            padding: 1em 1.25em;
            font-size: 1.75em;
            font-weight: 700;
            letter-spacing: .15em;
            text-transform: uppercase;
            text-decoration: none;
            color: ${COLORS.white};
            font-family: 'Raleway', Arial, sans-serif;
        }
        a:hover {
            color: ${COLORS.red};
        }
    }
    @media (max-width: 374px)
    and (orientation: portrait)
    and (-webkit-min-device-pixel-ratio: 2) {
        .top_nav {
            display: none;
        }
    }
    @media (max-width: 700px)
    and (orientation: portrait)
    and (-webkit-min-device-pixel-ratio: 2) {
        .top_nav {
            display: none;
        }
    }
    @media (min-width:320px)
    and (max-width: 768px)
    and (orientation: portrait)
    and (-webkit-min-device-pixel-ratio: 2) {
        .top_nav {
            display: none;
        }
    }
    @media (min-width: 600px)
    and (max-width: 768px)
    and (orientation: landscape)
    and (-webkit-min-device-pixel-ratio: 2) {
        .top_nav {
            display: none;
        }
    }
`

export const StyledSlideMenu = styled.div`
    .slide_menu {
        margin: auto;
        padding: 1em 2em;
        display: flex;
        width: 25rem;
        z-index: 1001;
        display: flex;
        flex-direction: column;
        background-color: ${props => props.menuColor || "red"};
        border: 1px solid ${COLORS.darkGray};
        border-radius: .5rem;
        position: absolute;
        left: -25rem;
        img {
            margin: .5em auto;
            padding: 1em 0;
            display: flex;
            width: 10rem;
            max-height: unset;
            left: 4rem;
            top: 1rem;
        }
        h2 {
            margin: auto;
            padding: 1rem;
            font-size: 1.75rem;
            font-weight: 700;
            letter-spacing: .15em;
            text-decoration: none;
            color: ${COLORS.yellow};
            font-family: satisfy;
        }
    }
    .menu_list {
        font-size: 1rem;
        border: 1px solid ${COLORS.yellow};
        border-radius: .5rem;
    }
    .menuHead & {
        width: min-content;
        display: block;
        position: relative;
    }
`

export const StyledNavBar = styled.div`
    z-index: 999;
    margin: 0;
    padding: 0;
    height: 5rem;
    width: 100%;
    font-size: 66.6%;
    line-height: 1.15;
    background-color: ${props => props.barColor || "red"};
    position: fixed;
    border-bottom: 2px solid ${COLORS.yellow};
    box-shadow: 1px 1px 3px ${COLORS.darkGray};
    img {
        margin: .5em auto;
        padding: 1em 0;
        max-width: 60vw;
        max-height: 4em;
        left: 4rem;
        top: 1rem;
    }
`

export const StyledLink = styled.div`
    a {
        margin: auto;
        padding: .5em 0;
        display: block;
        position: relative;
        font-size: 1.5em;
        font-weight: 700;
        letter-spacing: .15em;
        text-transform: uppercase;
        left: -17em;
        font-family: 'Raleway', Arial, sans-serif;
        color: white;
        text-decoration: none;
    }
    a:hover {
        color: #7cef7c;
    }
`
