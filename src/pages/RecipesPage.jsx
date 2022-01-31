import { PreloaderItem } from '../components/PreloaderItem'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Card } from '../components/Card'
import { getAllRecipesOfCategory } from '../api'

export function RecipesPage() {
    const { category } = useParams()
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        getAllRecipesOfCategory(category).then((data) => setRecipes(data.meals))
    }, [])

    return (
        <div>
            <section className='list'>
                <div className='container'>
                    <h1 className='title'>{category[0].toUpperCase() + category.slice(1)} recipes</h1>
                    <div className='list__inner card__row'>
                        {!recipes.length ? (
                            <PreloaderItem />
                        ) : (
                            recipes.map((resipe) => (
                                <Card
                                    key={resipe.idMeal}
                                    image={resipe.strMealThumb}
                                    name={resipe.strMeal}
                                    isCategory={false}
                                />
                            ))
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}
