import React from 'react'
import { ItemDeleteButton } from './buttons'
import { EditItemForm } from './forms/editItem'
import { StyledItem } from './styles/itemStyles'
import { StyledButton } from './styles/buttonStyles'

const COLORS = {
    black: "#000000"
}

const ShowEditForm = (props) => {
    const handleClick = () => {
        props.runFunction()
    }
    return (
        <StyledButton borderColor={COLORS.black}>
            <button onClick={handleClick}>Update</button>
        </StyledButton>
    )
}

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
                <div>Price</div>
                <div>{props.price}</div>
            </div>
            <div className="description">
                <h3>Description</h3>
                <p>{props.description}</p>
            </div>
            {props.inventory &&
            <div className="inventoryDisplay">
                <h3>Inventory</h3>
            </div>
            }

            <div className="buttonsDisplay">
                <ItemDeleteButton sku={props.sku} />
                <EditItemForm
                    showForm={props.form}
                    runFunction={props.runFunction}
                    name={props.name}
                    price={props.price}
                    isActive={props.isActive}
                    hasSizes={props.hasSizes}
                    description={props.description}
                />
            </div>
        </StyledItem>
    )
}
