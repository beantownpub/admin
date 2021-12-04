import React, { useState, useEffect } from 'react'
import { StyledSectionContainer } from './styles/categories'
import { NewCategoryForm } from './forms/addCategory'
import { CategoryCard } from './categories'

const OPTIONS = {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
}

export const FoodDash = () => {
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
        fetch('food/categories', OPTIONS)
            .then(response => response.json())
            .then(data => setState({ categories: data.data }))
            .catch(error => console.log(error))
    }, [form, updated])

    const updateCategories = () => {
        console.log('Updating Categories')
        fetch('food/categories', OPTIONS)
            .then(response => response.json())
            .then(data => setState({ categories: data.data, new: data.data }))
            .then(update(true))
            .catch(error => console.log(error))
    }

    const renderCategories = (categories) => {
        const categoryCards = categories.map((category) =>
            <CategoryCard
                key={category.sku.toString()}
                name={category.name}
                isActive={category.is_active}
                items={category.items}
                slug={category.slug}
                runFunction={updateCategories}
                showForm={form}
                api="food"
            />
        )
        return (
            <StyledSectionContainer aria-labelledby="Categories sections container">
                <h1>Food Menu Categories</h1>
                <NewCategoryForm showForm={form} runFunction={updateCategories} api="food" />
                {categoryCards}
            </StyledSectionContainer>
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
