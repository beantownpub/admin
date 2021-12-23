import React from 'react'
// import { InfoSection } from './common'
// import { MerchDash } from '../merch/main'
import { DashContainer } from './main'
import { FoodDash } from '../foodMenu/main'
import { StyledDashContainer } from './styles/containers'
import { LinkButton } from '../elements/buttons/main'
const CONFIG = require('./config.json')
const COLORS = CONFIG.colors


export const HubPubHomeDash = () => {
    return (
        <DashContainer margin="8rem auto 3rem auto">
            <StyledDashContainer bgColor={COLORS.black} borderRadius='1rem' border={`.25rem solid ${COLORS.white}`} maxWidth='35rem' padding='2rem 0'>
                <h1>The Hub Pub</h1>
                <LinkButton
                    bgColor={COLORS.buttonBlue}
                    border={`1px solid ${COLORS.white}`}
                    buttonText='Manage Menu'
                    maxWidth='90vw'
                    url='/thehubpub/food'
                    outerMargin="1rem auto"
                    textColor={COLORS.white}
                    width="30rem"
                />
                <LinkButton
                    bgColor={COLORS.headerRed}
                    border={`1px solid ${COLORS.white}`}
                    buttonText='Manage Party Requests'
                    maxWidth='90vw'
                    url='/thehubpub/events'
                    outerMargin="1rem auto"
                    textColor={COLORS.white}
                    width="30rem"
                />
            </StyledDashContainer>
        </DashContainer>
    )
}

export const HubPubFoodMenuDash = () => {
    return (
        <DashContainer>
            <FoodDash location="thehubpub"/>
        </DashContainer>
    )
}
