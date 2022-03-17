import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { loadingRecipe } from '../store/recipe/recipe-actions'
import {
    selectRecipeInfo,
    selectRecipe,
} from '../store/recipe/recipe-selectors'

import { Preloader } from '../components/Preloader'
import { Recipe } from '../components/Recipe'
import { selectFavorites } from '../store/recipes/recipes-selectors'
import {
    addToFavorites,
    removeFromFavorites,
} from '../store/recipes/recipes-actions'

export function RecipePage() {
    const { recipe } = useParams()
    const { error, status } = useSelector(selectRecipeInfo)
    const detailRecipe = useSelector(selectRecipe)
    const favorites = useSelector(selectFavorites)

    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(loadingRecipe(recipe))
    }, [recipe, dispatch])

    const checkIsFavorite = () => {
        const theRecipeIsFavorite = favorites.some(
            (favorite) => favorite.name === detailRecipe.strMeal
        )
        return theRecipeIsFavorite
    }

    const addFavorite = (obj) => {
        dispatch(addToFavorites(obj))
    }

    const removeFavorite = (name) => {
        dispatch(removeFromFavorites(name))
    }

    return (
        <>
            {error && <h2>Error: {error}</h2>}
            {status === 'loading' && <Preloader />}
            {status === 'recived' && (
                <Recipe
                    detailRecipe={detailRecipe}
                    isFavorite={checkIsFavorite()}
                    addFavorite={addFavorite}
                    removeFavorite={removeFavorite}
                />
            )}
        </>
    )
}
