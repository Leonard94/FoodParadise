import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getRecipe } from '../api'
import { Preloader } from '../components/Preloader'
import { Ingredients } from '../components/Ingredients'
import { GoBackBtn } from '../components/GoBackBtn'

export function RecipePage() {
    const { recipe } = useParams()
    const [detailRecipe, setDetailRecipe] = useState([])

    useEffect(() => {
        getRecipe(recipe).then((data) => {
            setDetailRecipe(data.meals[0])
        })
    }, [recipe])

    const {
        strMeal: name,
        strCategory: category,
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
                            <img src={image} alt={name} />
                            <div className='recipe__ingredients'>
                                <h3 className='recipe__title'>Ingredients:</h3>
                                <Ingredients detailRecipe={detailRecipe} />
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
                        <h6>Category: {category}</h6>
                        <h6>Area: {area}</h6>
                        <br />
                        <GoBackBtn />
                    </div>
                </section>
            )}
        </>
    )
}
