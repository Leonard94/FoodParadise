import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getRecipe } from '../api'
import { Preloader } from './Preloader'

export function Recipe() {
    const { recipe } = useParams()
    const [detailRecipe, setDetailRecipe] = useState([])
    useEffect(() => {
        getRecipe(recipe).then((data) => setDetailRecipe(data.meals[0]))
    }, [])

    const {
        strMeal: name,
        strVategory: category,
        strArea: area,
        strInstructions: instructions,
        strMealThumb: image,
        strYoutube: video,
    } = detailRecipe

    return (
        <>
            {detailRecipe.length ? (
                <Preloader />
            ) : (
                <section className='recipe'>
                    <div className='container'>
                        <h1 className='title'>{name}</h1>
                        <div className='recipe__row'>
                            <img src={image} alt='' />
                            <div className='recipe__ingredients'>
                                <h3 className='recipe__title'>Ingredients:</h3>
                                <ul>
                                    <li>Olive Oil x 1kg</li>
                                    <li>Garlic x 1kg</li>
                                    <li>Bacon x 1kg</li>
                                    <li>Stout x 1kg</li>
                                    <li>Corn Flour x 1kg</li>
                                </ul>
                            </div>
                        </div>

                        <div className='recipe__instructions'>
                            <h3 className='recipe__title'>Instructions:</h3>
                            <p>{instructions}</p>
                        </div>
                        {video ? (
                            <iframe
                                title={name}
                                src={`https://www.youtube.com/embed/${video.slice(
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
