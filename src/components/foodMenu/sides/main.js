import React from 'react'
import { EditItemForm } from '../forms/editItem'
import { StyledItem } from '../styles/itemStyles'
import { ItemTable } from '../../elements/tables/main'

export const renderItems = (items) => {
    const renderedItems = items.map((item) =>
        <ItemCard key={item.id.toString()}
            runFunction={item.runFunction || null}
            category={item.name || null}
            sku={item.id || null}
            slug={item.slug || null}
            name={item.name || null}
            isActive={item.is_active || null}
            description={item.description || null}
            price={item.price || null}
        />
    )
    return (
        <StyledItemsContainer aria-labelledby="Side cards list">
            {renderedItems}
        </StyledItemsContainer>
    )
}

export const SideCard = (props) => {
    return (
        <StyledItem aria-labelledby="Side card">
            <h2>{props.name}</h2>
            <ItemTable
                description={props.description}
                isActive={props.isActive}
                price={props.price}
            />

            <EditItemForm
                showForm={props.form}
                runFunction={props.runFunction}
                name={props.name}
                price={props.price}
                slug={props.slug}
                category={props.category}
                isActive={props.isActive}
                description={props.description}
                location={props.location}
            />
        </StyledItem>
    )
}
