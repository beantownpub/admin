import React from 'react'
import { SocialNav } from './social'
import {
    StyledAnchor,
    StyledInfo,
    StyledLinkButton,
    StyledHero,
    StyledFooter } from './Styles'


export const InfoSection = (props) => {
    return (
        <StyledInfo
            color={props.bgColor}
            fontColor={props.fontColor}
            textAlign={props.textAlign}
            marginTop={props.marginTop}
            paddingTop={props.paddingTop}
            paddingBottom={props.paddingBottom}
            paddingLeft={props.paddingLeft}
            paddingRight={props.paddingRight}>{props.children}</StyledInfo>
    )
}

export const Title = (props) => {
    return (
        <h1>{props.children}</h1>
    )
}

export const LinkButton = (props) => {
    const goTo = () => {
        window.location.href=props.url
    }
    return (
        <StyledLinkButton buttonColor={props.color} fontColor={props.fontColor}>
            <button onClick={goTo} type="button">{props.children}</button>
        </StyledLinkButton>
    )
}

export const HeroHeader = () => {
    return (
        <StyledHero>
            <h1>The only pub in the world where you can drink a cold Sam Adams' while viewing a cold Sam Adams</h1>
        </StyledHero>
    )
}

export const Anchor = (props) => {
    return (
        <StyledAnchor>
            <a href={props.target}>{props.text}</a>
        </StyledAnchor>
    )
}

export const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <StyledFooter>
            <footer>
                <h4>Est. 1999</h4>
                <img src="https://static.dev.beantownpub.com/img/logos/beantown_sign.svg" alt="Beantown Pub logo" />
                <h3>100 Tremont St. Boston MA</h3>
                <h2>Call: 617-426-0111</h2>
                <h2>Stay Connected</h2>
                <SocialNav/>
                <h2>{'© ' + year} Beantown Pub</h2>
            </footer>
        </StyledFooter>
    )
}
