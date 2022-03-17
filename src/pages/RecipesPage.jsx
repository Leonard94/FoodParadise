import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { PreloaderItem } from '../components/PreloaderItem'
import { CardRecipe } from '../components/CardRecipe'
import { GoBackBtn } from '../components/GoBackBtn'

import { loadingRecipes } from '../store/recipes/recipes-actions'
import {
    addToFavorites,
    removeFromFavorites,
} from '../store/recipes/recipes-actions'
import { selectRecipesInfo, selectAllRecipes } from '../store/recipes/recipes-selectors'

export function RecipesPage() {
    const { category } = useParams()
    const dispatch = useDispatch()

    const { error, status } = useSelector(selectRecipesInfo)
    const recipes = useSelector(selectAllRecipes)

    useEffect(() => {
        dispatch(loadingRecipes(category))
    }, [category, dispatch])

    const addFavorite = (obj) => {
        dispatch(addToFavorites(obj))
    }

    const removeFavorite = (name) => {
        dispatch(removeFromFavorites(name))
    }

    return (
        <div>
            <section className='list'>
                <div className='container'>
                    <h1 className='title'>
                        {category[0].toUpperCase() + category.slice(1)} recipes
                    </h1>
                    <div className='list__inner card__row'>
                        {error && <h2>Error!!!</h2>}
                        {status === 'loading' && <PreloaderItem />}
                        {status === 'rejected' && <h2>Попробуйте позже</h2>}
                        {status === 'recived' &&
                            recipes.map((recipe) => {
                                return (
                                    <CardRecipe
                                        key={recipe.idMeal}
                                        image={recipe.strMealThumb}
                                        name={recipe.strMeal}
                                        isFavorite={recipe.isFavorite}
                                        removeFromFavorites={removeFavorite}
                                        addFavorite={addFavorite}
                                    />
                                )
                            })}
                    </div>
                    <GoBackBtn />
                </div>
            </section>
        </div>
    )
}
