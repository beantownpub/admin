import React from 'react'
import { StyledCategoryCard, StyledItemsContainer } from './styles/categories'
import { DeleteButton, } from '../elements/buttons/main'
import { NewItemForm } from './forms/addItem'
import { EditCategoryForm } from './forms/editCategory'
import { ItemCard } from './items'


export const CategoryCard = (props) => {
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
                <div className="newItemFormButton">
                    <NewItemForm showForm={props.showForm} runFunction={props.runFunction} category={props.name}/>
                </div>
                {items}
            </StyledItemsContainer>
        )
    }

    return (
        <StyledCategoryCard aria-labelledby="Category Card">
            <h2>{props.name}</h2>
            <div className="isActive">
                <div>Active</div>
                {props.isActive &&
                    <div className="active">Yes</div>
                }
                {!props.isActive &&
                    <div className="notActive">No</div>
                }
            </div>
            <div className="buttonsDisplay">
            <DeleteButton name={props.name} runFunction={props.runFunction} endPoint="food/categories" />
            <EditCategoryForm
                showForm={props.form}
                runFunction={props.runFunction}
                name={props.name}
                isActive={props.isActive}
            />
            </div>
            <div>{renderItems()}</div>
        </StyledCategoryCard>
    )
}