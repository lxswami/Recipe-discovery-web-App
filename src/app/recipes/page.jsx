import Cart from '@/components/cart';
import { getRecipes } from '@/library/api-call'
import React from 'react'

export default async function RecipesPage() {
    const recipes = await getRecipes();
    console.log(recipes)
    return (
        <div>
            <Cart items={recipes}/>
        </div>
    )
}
