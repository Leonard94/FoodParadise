import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { CardRecipe } from './CardRecipe'

import {
    loadingSearchRecipes,
    clearSearch,
} from '../store/recipes/recipes-actions'
import {
    selectSearchRecipes,
    selectFavorites,
    selectRecipesInfo,
} from '../store/recipes/recipes-selectors'
import {
    addToFavorites,
    removeFromFavorites,
} from '../store/recipes/recipes-actions'
import { Preloader } from './Preloader'

export function Search() {
    const [value, setValue] = useState('')
    const [searchStr, setSearchStr] = useState('')

    const searchResult = useSelector(selectSearchRecipes)
    const { status } = useSelector(selectRecipesInfo)
    const favorites = useSelector(selectFavorites)

    const dispatch = useDispatch()

    const handleSubmit = () => {
        if (value !== '') {
            setSearchStr(value)
            dispatch(loadingSearchRecipes(value.trim()))
            setValue('')
        }
    }

    const addFavorite = (obj) => {
        dispatch(addToFavorites(obj))
    }

    const removeFavorite = (name) => {
        dispatch(removeFromFavorites(name))
    }

    useEffect(() => {
        return () => {
            dispatch(clearSearch())
        }
    }, [dispatch])

    return (
        <>
            <section className='banner'>
                <div className='container'>
                    <div className='banner__inner'>
                        <div className='banner__title'>
                            The Resipe Of Food Paradise!
                        </div>
                        <div className='search'>
                            <input
                                className='search__input'
                                type='search'
                                placeholder='Search for a meal . . .'
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') handleSubmit()
                                }}
                            />
                            <button
                                onClick={handleSubmit}
                                className='btn btn--search'
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='search'>
                <div className='container'>
                    {status === 'loading' && (
                        <h2 className='title'>Loading...</h2>
                    )}

                    {searchResult === null ? (
                        <h2 className='title title-search'>
                            No results found for '{searchStr}'
                        </h2>
                    ) : !searchResult.length ? null : (
                        <>
                            <h2 className='title'>Result for '{searchStr}'</h2>
                            <div className='card__row card__search'>
                                {searchResult.map((recipe) => {
                                    const theRecipeIsFavorite = favorites.some(
                                        (favorite) =>
                                            favorite.name === recipe.strMeal
                                    )
                                    return (
                                        <CardRecipe
                                            key={recipe.idMeal}
                                            image={recipe.strMealThumb}
                                            name={recipe.strMeal}
                                            isFavorite={theRecipeIsFavorite}
                                            addFavorite={addFavorite}
                                            removeFromFavorites={removeFavorite}
                                        />
                                    )
                                })}
                            </div>
                        </>
                    )}
                </div>
            </section>
        </>
    )
}
