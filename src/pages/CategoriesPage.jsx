import { useState, useEffect } from 'react'
import { CardCategory } from '../components/CardCategory'
import { PreloaderItem } from '../components/PreloaderItem'
import { getAllCategories } from '../api'

export function CategoriesPage() {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        getAllCategories().then((data) => setCategories(data.categories))
    }, [])

    return (
        <>
            <section className='list'>
                <div className='container'>
                    <h1 className='title'>Categories</h1>
                    <div className='card__row'>
                        {!categories.length ? (
                            <PreloaderItem />
                        ) : (
                            categories.map((category) => (
                                <CardCategory
                                    key={category.idCategory}
                                    image={category.strCategoryThumb}
                                    name={category.strCategory}
                                    isCategory={true}
                                />
                            ))
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}
