import React from 'react'

export const ItemTable = (props) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th className="narrowColumn">Active</th>
                    <th className="narrowColumn">Price</th>
                    <th className="descriptionColumn">Description</th>
                </tr>
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
    )
}
