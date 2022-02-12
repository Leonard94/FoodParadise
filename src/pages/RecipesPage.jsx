import { PreloaderItem } from '../components/PreloaderItem'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CardRecipe } from '../components/CardRecipe'
import { getAllRecipesOfCategory } from '../api'
import { GoBackBtn } from '../components/GoBackBtn'

export function RecipesPage({
    favorites,
    addToFavorites,
    removeFromFavorites,
}) {
    const { category } = useParams()
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        getAllRecipesOfCategory(category).then((data) => {
            let newData = whichIsFavoriteItem(data.meals)
            setRecipes(newData)
        })
    }, [category, favorites])

    function whichIsFavoriteItem(arr) {
        favorites.forEach((favorite) => {
            let index = arr.findIndex(
                (recipe) => favorite.name === recipe.strMeal
            )
            if (index >= 0) {
                arr[index].isFavorite = true
            }
        })
        return arr
    }

    return (
        <div>
            <section className='list'>
                <div className='container'>
                    <h1 className='title'>
                        {category[0].toUpperCase() + category.slice(1)} recipes
                    </h1>
                    <div className='list__inner card__row'>
                        {!recipes.length ? (
                            <PreloaderItem />
                        ) : (
                            recipes.map((resipe) => (
                                <CardRecipe
                                    key={resipe.idMeal}
                                    image={resipe.strMealThumb}
                                    name={resipe.strMeal}
                                    isFavorite={
                                        resipe.isFavorite ? true : false
                                    }
                                    addToFavorites={addToFavorites}
                                    removeFromFavorites={removeFromFavorites}
                                />
                            ))
                        )}
                    </div>
                    <GoBackBtn />
                </div>
            </section>
        </div>
    )
}
