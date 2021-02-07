import React, { useState, useEffect } from 'react'
import { StyledCategoriesContainer } from '../styles/categories'
import { NewCategoryForm } from '../forms/addCategory'
import { CategoryCard } from '../categories'

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
        const options = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }
        fetch('food/categories', options)
            .then(response => response.json())
            .then(data => setState({ categories: data.data }))
            .catch(error => console.log(error))
    }, [form, updated])

    const updateCategories = () => {
        const options = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }
        fetch('food/categories', options)
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
            items={category.items}
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
