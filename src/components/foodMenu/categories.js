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
            <table>
                <tbody>
                    <tr><td>Section</td><td style={{color: COLORS.dodgerBlue}}>{props.name}</td></tr>
                    <tr>
                        <td>Active</td>
                        {props.isActive &&
                            <td style={{color: COLORS.okStatusGreen}}>Yes</td>
                        }
                        {!props.isActive &&
                            <td style={{color: COLORS.red}}>No</td>
                        }
                    </tr>
                </tbody>
            </table>
            <EditCategoryForm
                showForm={props.form}
                runFunction={props.runFunction}
                name={props.name}
                isActive={props.isActive}
                slug={props.slug}
                location={props.location}
            />
            <div className="foodItems">
                <h2>{makeSingular(props.name)} Items</h2>
                <div className="alignHorizontally autoMargin">
                    <ToggleButton bgColor={COLORS.dodgerBlue} runFunction={displayItems} buttonText="Show Items"/>
                    <ToggleButton bgColor={COLORS.dodgerBlue} runFunction={hideItems} buttonText="Hide Items"/>
                    <ToggleButton bgColor={COLORS.okStatusGreen} runFunction={displayForm} buttonText="Add New Item"/>
                </div>
                {state.showNewItemForm &&
                    <NewItemForm category={props.name} hideForm={hideForm} location={props.location} runFunction={props.runFunction} showForm={props.showForm}/>
                }
                {state.showItems &&
                    <div>{renderItems()}</div>
                }
            </div>
        </StyledCategoryCard>
    )
}