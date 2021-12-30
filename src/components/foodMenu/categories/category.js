import React, { useState } from 'react'
import { StyledCategoryCard, StyledItemsContainer } from './styles'
import { NewItemForm } from '../forms/addItem'
import { EditCategoryForm } from '../forms/editCategory'
import { ItemCard } from './items'
import { ToggleButton } from '../../elements/buttons/main'
import { config, makeSingular } from '../../../utils/main'
const COLORS = config.colors


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
                <ItemCard
                    category={props.name}
                    description={item.description}
                    isActive={item.is_active}
                    key={item.id.toString()}
                    location={props.location}
                    name={item.name}
                    price={item.price}
                    runFunction={props.runFunction}
                    sku={item.id}
                    slug={item.slug}
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
                description={props.description}
                isActive={props.isActive}
                location={props.location}
                name={props.name}
                runFunction={props.runFunction}
                showForm={props.form}
                sku={props.sku}
                slug={props.slug}
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