// import React, { useState } from 'react'
import React from 'react'
import MenuIcon, { getIcon } from '../icon'
import { StyledButton, iconStyle } from './styles/buttonStyles'

export class CartButton extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.clicker(this.props.sku, this.props.quantity, this.props.size, this.props.action)
    }
    render() {
        return(
            <StyledButton borderColor={this.props.borderColor} buttonWidth={this.props.width} id='CartButton'>
                <button onClick={this.handleClick}>{this.props.text}</button>
            </StyledButton>
		)
    }
}

export class ViewButton extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        if (this.props.clicker) {
            if (this.props.category) {
                this.props.clicker(this.props.category)
            } else {
                this.props.clicker()
            }
        }
    }

    render() {
        return(
            <StyledButton borderColor={this.props.borderColor} width={this.props.width}>
                <button onClick={this.handleClick}>
                    {this.props.icon &&
                        <MenuIcon style={iconStyle} name={getIcon(this.props.icon)} />}{this.props.text}</button>
            </StyledButton>
		)
    }
}

export const ShowCategoryCreateFormButton = (props) => {
    const handleClick = () => {
        props.runFunction()
    }
    return (
        <StyledButton>
            <button onClick={handleClick}>Create New Category</button>
        </StyledButton>
    )
}

export const ShowProductCreateFormButton = (props) => {
    const handleClick = () => {
        props.runFunction()
    }
    return (
        <StyledButton>
            <button onClick={handleClick}>Add New Product</button>
        </StyledButton>
    )
}

export const HideCategoryCreateFormButton = (props) => {
    const handleClick = () => {
        props.runFunction()
    }
    return (
        <StyledButton>
            <button onClick={handleClick}>Cancel</button>
        </StyledButton>
    )
}

export const ShowCategoryEditFormButton = (props) => {
    const handleClick = () => {
        props.runFunction()
    }
    return (
        <StyledButton>
            <button onClick={handleClick}>Edit</button>
        </StyledButton>
    )
}

export const CategoryEditButton = (props) => {
    const handleClick = () => {
        const options = {
            method: 'UPDATE',
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
            <button onClick={handleClick}>Update</button>
        </StyledButton>
    )
}

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

export const ProductEditButton = (props) => {
    const handleClick = () => {
        const options = {
            method: 'UPDATE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                sku: props.sku
            })
        }
        fetch('/products', options)
            .then(response => response.json())
            .catch(error => console.log(error))
        props.runFunction()
    }
    return (
        <StyledButton>
            <button onClick={handleClick}>Update</button>
        </StyledButton>
    )
}

export const ProductDeleteButton = (props) => {
    const handleClick = () => {
        const options = {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                sku: props.sku
            })
        }
        fetch('/products', options)
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
