import React from 'react'
import { StyledButton } from './styles/categories'

export const CategoryDeleteButton = (props) => {
    const handleClick = () => {
        const options = {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: props.category
            })
        }
        fetch('/categories', options)
            .then(response => response.json())
            .catch(error => console.log(error))
        props.runFunction()
    }
    return (
        <StyledButton>
            <button onClick={handleClick}>Delete</button>
        </StyledButton>
    )
}
