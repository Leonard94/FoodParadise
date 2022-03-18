import { useEffect } from 'react'
import { CardCategory } from '../components/CardCategory'
import { PreloaderItem } from '../components/PreloaderItem'
import { useSelector, useDispatch } from 'react-redux'
import { loadCategories } from '../store/categories/categories-actions'
import {
    selectInfoCategories,
    selectAllCategories,
} from '../store/categories/categories-selectors'

export function CategoriesPage() {
    const dispatch = useDispatch()

    const { qty, error, status } = useSelector(selectInfoCategories)

    const categories = useSelector(selectAllCategories)

    useEffect(() => {
        if (!qty) {
            dispatch(loadCategories())
        }
    }, [qty, dispatch])

    return (
        <>
            <section className='list'>
                <div className='container'>
                    <h1 className='title'>Categories</h1>
                    <div className='card__row'>
                        {error && <h2>Error!!!</h2>}
                        {status === 'loading' && <PreloaderItem />}
                        {status === 'rejected' && <h2>Попробуйте позже</h2>}
                        {status === 'recived' &&
                            categories.map((category) => (
                                <CardCategory
                                    key={category.idCategory}
                                    image={category.strCategoryThumb}
                                    name={category.strCategory}
                                    isCategory={true}
                                />
                            ))}
                    </div>
                </div>
            </section>
        </>
    )
}
