import React, { useState, useEffect } from 'react'
import { StyledMainContainer } from './styles/main'
import { NewCategoryForm } from './forms/addCategory'
import { CategoryCard } from './categories'
import { ToggleButton } from '../elements/buttons/main'

const CONFIG = require('../content/config.json')
const COLORS = CONFIG.colors

const OPTIONS = {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
}

export const FoodDash = () => {
    const [state, setState] = useState({
        categories: [],
        showNewCategoryForm: false
    })
    const [updated, update] = useState(false)

    const displayForm = () => {
        setState({ showNewCategoryForm: true, categories: state.categories })
    }

    const hideForm = () => {
        setState({ showNewCategoryForm: false, categories: state.categories })
    }
    useEffect(() => {
        fetch('food/categories', OPTIONS)
            .then(response => response.json())
            .then(data => setState({ categories: data.data }))
            .catch(error => console.log(error))
    }, [updated])

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
                location="beantown"
                runFunction={updateCategories}
                showForm={displayForm}
                slug={category.slug}
            />
        )
        return (
            <div aria-labelledby="Category cards">
                {categoryCards}
            </div>
        )
    }

    return (
        <StyledMainContainer aria-labelledby="Main container">
            <h1>Menu Sections</h1>
            <ToggleButton
                // displays and hides form for creating categories
                bgColor={COLORS.pastelGreen}
                buttonText="Add New Section"
                outerMargin="auto"
                runFunction={displayForm}
                textColor={COLORS.black}
            />
            {state.showNewCategoryForm &&
                <NewCategoryForm boxShadow="unset" hideForm={hideForm} location="beantown" reRenderFunction={updateCategories}/>
            }
            {state.categories &&
                <div>{renderCategories(state.categories)}</div>
            }
        </StyledMainContainer>
    )
}
