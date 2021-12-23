import React from 'react'
// import { InfoSection } from './common'
// import { MerchDash } from '../merch/main'
import { FoodDash } from '../foodMenu/main'
import { StyledPageContainer, StyledDashContainer } from './styles/containers'
import { StyledFooter } from './styles/footer'
import { LinkButton } from '../elements/buttons/main'
const CONFIG = require('./config.json')
const COLORS = CONFIG.colors

export const DashContainer = (props) => {
    console.log('Making DASHCONTAINER')
    return (
        <StyledPageContainer
            margin={props.margin || "6rem auto auto auto"}
            aria-labelledby="Beantown dash content container"
        >
            {props.children}
        </StyledPageContainer>
    )
}

export const HomeDash = () => {
    console.log('Making HomeDASH')
    return (
        <DashContainer>
            <LinkButton
                bgColor={COLORS.yellow}
                border={`1px solid ${COLORS.white}`}
                buttonText='Beantown Console'
                maxWidth='90vw'
                url='/beantown'
                outerMargin="1rem auto"
                textColor={COLORS.black}
                width="30rem"
            />
            <LinkButton
                bgColor={COLORS.headerRed}
                border={`1px solid ${COLORS.white}`}
                buttonText='Hub Pub Console'
                maxWidth='90vw'
                url='/thehubpub'
                outerMargin="1rem auto"
                textColor={COLORS.white}
                width="30rem"
            />
        </DashContainer>
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