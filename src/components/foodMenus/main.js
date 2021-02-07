import React from 'react'
import { StyledFoodMenu } from './styles/menuStyles'
import { MenuSection } from './sections'


const MenuContainer = (props) => {
    return (
        <StyledFoodMenu>{props.children}</StyledFoodMenu>
    )
}

export const FoodMenu = () => {
    return (
        <MenuContainer>
            <MenuSection
                name="Beantown Beginnings"
                category="appetizers"
            />
            <MenuSection
                name="Title Town Wings"
                category="wings"
                description="Best wings in Boston! Available house battered or naked"
                postInfo="FLAVORS: plain, buffalo, honey buffalo, XXX hot, teriyaki, bbq, sweet chili, garlic parmesan. Choose two per order"
            />
            <MenuSection
                name="Soups"
                category="soups"
            />
            <MenuSection
                name="Salads"
                category="salads"
                description="Add grilled chicken or turkey tips for 4.00"
                postInfo="DRESSINGS: Italian, Creamy Italian, Ranch, Blue Cheese, Greek, Honey Mustard, Russian, Balsamic Vinaigrette, Fat Free Vinaigrette, and Oila Vinegar"
            />
            <MenuSection
                name="Beantown Entrees"
                category="entrees"
                description="Add a starter salad to any entree or sandwich for 4.95"
            />
            <MenuSection
                name="Beantown Sandwiches"
                category="sandwiches"
                description="Sandwiches served on an extra large fresh roll with a pickle spear and a choice of side. Add a starter salad to any entree or sandwich for 4.95"
                postInfo="SIDES: Fries, homemade potato salad, homemade coleslaw, black beans & rice, mashed potatos, jasmin rice, homemade potato chips, baked beans"
            />
            <MenuSection
                name="Burgers"
                category="burgers"
                description="Add a starter salad to any burger for 4.95"
            />
            <div className="warning">
                <h3>*These items are cooked to order. There is a risk associated with consuming undercooked meat products</h3>
            </div>
        </MenuContainer>
    )
}
