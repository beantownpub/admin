import React from 'react'
import { DashContainer, InfoSection } from './common'
// import { MerchDash } from '../merch/main'
import { FoodDash } from '../foodMenu/main'
import { StyledDashContainer } from './styles/dashboard'
const CONFIG = require('./config.json')
const COLORS = CONFIG.colors

export const MainDash = () => {
    return (
        <StyledDashContainer aria-labelledby="Beantown dash">
            <InfoSection bgColor={COLORS.backgroundBeige} marginTop='10rem'>
                <section>
                    <h1>Beantown Pub</h1>
                    <ul>
                    <li><a href="/food">Manage Food Menu</a></li>
                    </ul>
                </section>
            </InfoSection>
        </StyledDashContainer>
    )
}

export const BeantownDash = () => {
    return (
        <StyledDashContainer aria-labelledby="Beantown dash">
            <InfoSection bgColor={COLORS.backgroundBeige} marginTop='10rem'>
                <section>
                    <h1>Beantown Pub</h1>
                    <ul>
                    <li><a href="/food">Manage Food Menu</a></li>
                    </ul>
                </section>
            </InfoSection>
        </StyledDashContainer>
    )
}

export const TheHubPubDash = () => {
    return (
        <StyledDashContainer aria-labelledby="Hub Pub dash">
            <InfoSection bgColor={COLORS.backgroundBeige} marginTop='10rem'>
                <section>
                    <h1>The Hub Pub Dash Coming Soon</h1>
                </section>
            </InfoSection>
        </StyledDashContainer>
    )
}

export const FoodMenuDash = () => {
    return (
        <DashContainer bgColor={COLORS.backgroundBeige} marginTop='5rem'>
            <h1>Beantown Food Menu</h1>
            <FoodDash/>
        </DashContainer>
    )
}

export const PartiesDash = () => {
    return (
        <div>
            <InfoSection bgColor={COLORS.backgroundBeige} marginTop='10rem'>
                <section>
                    <h1>Beantown Private Parties</h1>
                </section>
            </InfoSection>
        </div>
    )
}



export const Merch = () => {
    return (
        <div>
        <InfoSection bgColor={COLORS.yellow} marginTop='10rem'>
            <section>
                <h1>Beantown Merchandise</h1>
                {// <MerchDash/>
                }
            </section>
        </InfoSection>
        </div>
    )
}

export const ErrorPage = () => {
    return (
        <div>
            <InfoSection bgColor='#fcba03'>
                <section>
                    <h1>See Yah Laatah&trade;!</h1>
                    <h2>Sorry, somethin' aint right</h2>
                    <h2>Requested page is nowhere to be found on the server</h2>
                </section>
            </InfoSection>
        </div>
    )
}