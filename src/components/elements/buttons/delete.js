import React from 'react'
import Popup from "react-popup"
import { Button } from './main'

export const DeleteButton = (props) => {
    const handleClick = () => {
        Popup.plugins().prompt(props.name, props.itemType, function (value) {
            if (value === 'delete') {
                const options = {
                    method: 'DELETE',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        name: props.name,
                        sku: props.sku
                    })
                }
                fetch(props.endPoint, options)
                    .then(response => response.json())
                    .catch(error => console.log(error))
                props.runFunction()
                Popup.alert(`${props.itemType} ${props.name} Deleted`)
            }
        })
    }
    return (
        <Button
            clickHandler={handleClick}
            buttonStyles={props}
            buttonText="Delete"
        />
    )
}

Popup.registerPlugin('prompt', function (defaultValue, placeholder, callback) {
    console.log('Default Value ' + defaultValue)
    console.log('Placeholder ' + placeholder)
    let promptValue = 'delete';
    let promptChange = function (value) {
        promptValue = value
    }
    this.create({
        title: `Are you sure you want to delete ${placeholder} ${defaultValue}?`,
        buttons: {
            left: ['cancel'],
            right: [{
                text: 'Delete',
                key: '⌘+s',
                className: 'success',
                action: function () {
                    callback(promptValue)
                    Popup.close()
                }
            }]
        }
    })
})