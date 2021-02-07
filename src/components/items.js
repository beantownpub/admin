import React from 'react'
import { ItemDeleteButton } from './buttons'
import { EditItemForm } from './forms/editItem'
import { StyledItem } from './styles/itemStyles'

export const ItemCard = (props) => {
    return (
        <StyledItem>
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
            <div className="priceDisplay">
                <div>SKU</div>
                <div>{props.sku}</div>
                <div>Price</div>
                <div>{props.price}</div>
            </div>
            <div className="description">
                <h3>Description</h3>
                <p>{props.description}</p>
            </div>
            <h3>Inventory</h3>
            <div className="inventoryDisplay">
            </div>
            <div className="buttonsDisplay">
                <ItemDeleteButton sku={props.sku} />
                <EditItemForm
                    showForm={props.form}
                    runFunction={props.runFunction}
                    name={props.name}
                    isActive={props.isActive}
                    hasSizes={props.hasSizes}
                    description={props.description}
                />
            </div>
        </StyledItem>
    )
}
