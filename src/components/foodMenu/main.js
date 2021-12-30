import React from 'react'
import { StyledDashContainer } from './styles/main'
import { Categories } from './categories/main'

export const FoodDash = (props) => {

    return (
        <StyledDashContainer aria-labelledby={`${props.location} Food dashboard container`}>
            <Categories location={props.location}/>
        </StyledDashContainer>
    )
}
