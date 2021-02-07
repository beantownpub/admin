import React, { useState, useEffect } from 'react'
import {
    StyledCategoryCard,
    StyledCategoriesContainer,
    StyledProductsContainer } from './styles/categories'
import { CategoryDeleteButton, } from './merch/buttons'
import { NewCategoryForm } from './merch/forms/addCategory'
import { NewProductForm } from './merch/forms/addProduct'
import { EditCategoryForm } from './merch/forms/editCategory'
import { ProductCard } from './merch/products'

export const MerchDash = () => {
    const [state, setState] = useState({
        categories: []
    })
    const [updated, update] = useState(false)
    const [form, showForm] = useState(false)
    const toggleForm = () => {
        console.log('Toggling form')
        showForm(true)
    }
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }
        fetch('/categories', options)
            .then(response => response.json())
            .then(data => setState({ categories: data.data }))
            .catch(error => console.log(error))
    }, [form, updated])

    const updateCategories = () => {
        const options = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }
        fetch('/categories', options)
            .then(response => response.json())
            .then(data => setState({ categories: data.data, new: data.data }))
            .then(update(true))
            .catch(error => console.log(error))
    }

    const renderCategories = (categories) => {
        console.log('Categories: ' + categories)
        console.log('Categories Keys: ' + Object.keys(categories))
        // const cats = state.categories
        const cats = categories.map((category) =>
        <CategoryCard
            key={category.id.toString()}
            name={category.name}
            isActive={category.is_active}
            hasSizes={category.has_sizes}
            products={category.products}
            runFunction={updateCategories}
            showForm={form}
        />);
        return (
            <StyledCategoriesContainer>
                <h1>Categories</h1>
                <NewCategoryForm showForm={form} runFunction={updateCategories} />
                {cats}
            </StyledCategoriesContainer>
        )
    }

    return (
        <div>
            {state.categories &&
                <div>{renderCategories(state.categories)}</div>
            }
        </div>
    )
}

const CategoryCard = (props) => {
    const renderProducts = () => {
        if (props.products.length > 0) {
            console.log('Products Type: ' + typeof props.products)
            const products = props.products.map((product) =>
                <ProductCard key={product.sku.toString()}
                    sku={product.sku}
                    name={product.name}
                    isActive={product.isActive}
                    description={product.description}
                    price={product.price}
                />
            )
            return (
                <StyledProductsContainer>
                    <h3>PRODUCTS</h3>
                    <NewProductForm showForm={props.showForm} runFunction={props.runFunction} />
                    {products}
                </StyledProductsContainer>
            )
        }
    }

    return (
        <StyledCategoryCard>
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
            <CategoryDeleteButton category={props.name} runFunction={props.runFunction}/>
            <EditCategoryForm
                showForm={props.form}
                runFunction={props.runFunction}
                name={props.name}
                isActive={props.isActive}
                hasSizes={props.hasSizes}
            />
            </div>
            <div>{renderProducts()}</div>
        </StyledCategoryCard>
    )
}