import React from 'react'
import { EditItemForm } from './forms/editItem'
import { StyledItem } from './styles/itemStyles'

export const ItemCard = (props) => {
    return (
        <StyledItem aria-labelledby="Item card">
            <h2>{props.name}</h2>
            <table>
            <tbody>
                <tr><th className="narrowColumn">Active</th><th className="narrowColumn">Price</th><th className="descriptionColumn">Description</th></tr>
                <tr>{props.isActive &&
                    <td className="active tableData">Yes</td>
                }
                {!props.isActive &&
                    <td className="notActive tableData">No</td>
                }
                <td className="tableData">{props.price}</td>
                <td className="tableItemDescription">{props.description}</td></tr>
            </tbody>
            </table>
            {props.inventory &&
            <div className="inventoryDisplay">
                <h3>Inventory</h3>
            </div>
            }

            <EditItemForm
                showForm={props.form}
                runFunction={props.runFunction}
                name={props.name}
                price={props.price}
                slug={props.slug}
                category={props.category}
                isActive={props.isActive}
                hasSizes={props.hasSizes}
                description={props.description}
                location="beantown"
            />
        </StyledItem>
    )
}
