import React from 'react'
import { InfoSection } from './common'
import { MerchDash } from './merchMgmtUi'
// import { LinkButton } from './common'


export const MainDash = () => {
    return (
        <div>
            <InfoSection bgColor='#fcba03' marginTop='10rem'>
                <section>
                    <h1>Welcome!</h1>
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

export const FoodDash = () => {
    return (
        <div>
            <InfoSection bgColor='#fcba03' marginTop='10rem'>
                <section>
                    <h1>Beantown Food Menu</h1>
                </section>
            </InfoSection>
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