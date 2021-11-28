import React from 'react'
import {
    StyledAnchor,
    StyledInfo,
    StyledLinkButton,
    StyledFooter } from './styles'
import { StyledDashContainer } from './styles/dashboard'

export const DashContainer = (props) => {
    return (
        <StyledDashContainer
            aria-labelledby="Dashboard Container"
            backgroundColor={props.bgColor}
            fontColor={props.fontColor}
            textAlign={props.textAlign}
            marginTop={props.marginTop}
            paddingTop={props.paddingTop}
            paddingBottom={props.paddingBottom}
            paddingLeft={props.paddingLeft}
            paddingRight={props.paddingRight}>{props.children}</StyledDashContainer>
    )
}

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
                <h2>{'© ' + year} Beantown Pub</h2>
            </footer>
        </StyledFooter>
    )
}
