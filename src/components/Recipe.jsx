import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getRecipe } from '../api'
import { Preloader } from './Preloader'

export function Recipe() {
    const { recipe } = useParams()
    const [detailRecipe, setDetailRecipe] = useState([])

    useEffect(() => {
        getRecipe(recipe).then((data) => {
            const extractDetailRecipe = extractRecipe(data.meals[0])
            setDetailRecipe(extractDetailRecipe)
        })
    }, [recipe])

    function extractRecipe(meal) {
        const newMeal = {
            name: meal.strMeal,
            instructions: meal.strInstructions,
            category: meal.strCategory,
            area: meal.strArea,
            image: meal.strMealThumb,
            video: meal.strYoutube,
        }

        Object.keys(meal)
            .filter((key) => key.substring(0, 13) === 'strIngredient')
            .reduce(
                (ingredients, ingredient) => ingredients.concat(ingredient),
                []
            )
            .forEach((key, index) => {
                let ingIndex = index + 1
                newMeal[meal[key]] = meal[`strMeasure${ingIndex}`]
            })
        return newMeal
    }

    return (
        <>
            {detailRecipe.length ? (
                <Preloader />
            ) : (
                <section className='recipe'>
                    <div className='container'>
                        <h1 className='title'>{detailRecipe.name}</h1>
                        <div className='recipe__row'>
                            <img src={detailRecipe.image} alt='' />
                            <div className='recipe__ingredients'>
                                <h3 className='recipe__title'>Ingredients:</h3>
                                <ul>

                                </ul>
                                <h6>Area: {detailRecipe.area}</h6>
                                <h6>Category: {detailRecipe.category}</h6>
                            </div>
                        </div>

                        <div className='recipe__instructions'>
                            <h3 className='recipe__title'>Instructions:</h3>
                            <p>{detailRecipe.instructions}</p>
                        </div>
                        {detailRecipe.video ? (
                            <iframe
                                title={detailRecipe.name}
                                src={`https://www.youtube.com/embed/${detailRecipe.video.slice(
                                    -11
                                )}`}
                                allowFullScreen
                            />
                        ) : null}
                    </div>
                </section>
            )}
        </>
    )
}
