import React from 'react'
import { DashContainer, InfoSection } from './common'
import { MerchDash } from '../merchMgmtUi'
import { FoodDash } from '../foodMenu/main.js'
// import { LinkButton } from './common'


export const MainDash = () => {
    return (
        <div>
            <InfoSection bgColor='#fcba03' marginTop='10rem'>
                <section>
                    <h1>Welcome!</h1>
                    <ul>
                    <li><a href="/food">Manage Beantown Food Menu</a></li>
                    <li><a href="/food">Manage HubPub Food Menu</a></li>
                    </ul>
                </section>
            </InfoSection>
        </div>
    )
}

export const PartiesDash = () => {
    return (
        <div>
            <InfoSection bgColor='#fcba03' marginTop='10rem'>
                <section>
                    <h1>Beantown Private Parties</h1>
                </section>
            </InfoSection>
        </div>
    )
}

export const FoodMenuDash = () => {
    return (
        <div>
            <DashContainer bgColor='#fcba03' marginTop='10rem'>
                <section>
                    <h1>Beantown Food Menu</h1>
                    <FoodDash/>
                </section>
            </DashContainer>
        </div>
    )
}

export const Merch = () => {
    return (
        <div>
        <InfoSection bgColor='#fcba03' marginTop='10rem'>
            <section>
                <h1>Beantown Merchandise</h1>
                <MerchDash/>
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