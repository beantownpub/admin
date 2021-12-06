import React, { useState } from 'react'
import { StyledCategoryCard, StyledItemsContainer } from './styles/categories'
import { NewItemForm } from './forms/addItem'
import { EditCategoryForm } from './forms/editCategory'
import { ItemCard } from './items'
import { ToggleButton } from '../elements/buttons/main'

const CONFIG = require('../content/config.json')
const COLORS = CONFIG.colors

function makeSingular(name) {
    return name.replace(/ees$/, 'ee').replace(/es$/, '').replace(/s$/, '')
}

export const CategoryCard = (props) => {
    const [state, setState] = useState({
        showItems: false,
        showNewItemForm: false
    })

    const displayItems = () => {
        setState({ showItems: true })
    }

    const hideItems = () => {
        setState({ showItems: false })
    }

    const displayForm = () => {
        setState({ showNewItemForm: true })
    }

    const hideForm = () => {
        setState({ showNewItemForm: false })
    }

    const renderItems = () => {
        let items = ''
        // console.log('ITEMS: ' + props.items)
        if (props.items) {
            items = props.items.map((item) =>
                <ItemCard key={item.sku.toString()}
                    runFunction={props.runFunction}
                    category={props.name}
                    sku={item.sku}
                    slug={item.slug}
                    name={item.name}
                    isActive={item.is_active}
                    description={item.description}
                    price={item.price}
                />
            )
        }
        return (
            <StyledItemsContainer aria-labelledby="Items Container">
                {items}
            </StyledItemsContainer>
        )
    }

    return (
        <StyledCategoryCard aria-labelledby="Category Card">
            <div className="alignHorizontally">
                <h4>Section</h4>
                <h4 className="categoryName"> {props.name}</h4>
            </div>
            <div className="isActive">
                <h4>Status</h4>
                {props.isActive &&
                    <div className="active"><h4> Enabled</h4></div>
                }
                {!props.isActive &&
                    <div className="notActive"><h4> Disabled</h4></div>
                }
            </div>
            <EditCategoryForm
                showForm={props.form}
                runFunction={props.runFunction}
                name={props.name}
                isActive={props.isActive}
                slug={props.slug}
            />
            <div className="itemsBorder">
            <h2>{makeSingular(props.name)} Items</h2>
            <div className="alignHorizontally autoMargin">
                <ToggleButton bgColor={COLORS.dodgerBlue} runFunction={displayItems} buttonText="Show Items"/>
                <ToggleButton bgColor={COLORS.dodgerBlue} runFunction={hideItems} buttonText="Hide Items"/>
                <ToggleButton bgColor={COLORS.dodgerBlue} runFunction={displayForm} buttonText="Add New Item"/>
            </div>
            {state.showNewItemForm &&
                <NewItemForm showForm={props.showForm} hideForm={hideForm} runFunction={props.runFunction} category={props.name}/>
            }
            {state.showItems &&
                <div>{renderItems()}</div>
            }
            </div>
        </StyledCategoryCard>
    )
}