import { useSelector, useDispatch } from 'react-redux'

import { CardRecipe } from '../components/CardRecipe'
import { GoBackBtn } from '../components/GoBackBtn'

import { removeFromFavorites } from '../store/recipes/recipes-actions'
import { selectFavorites } from '../store/recipes/recipes-selectors'

export function FavoritesPage() {
    const dispatch = useDispatch()
    const favorites = useSelector(selectFavorites)

    const remove = (name) => {
        dispatch(removeFromFavorites(name))
    }

    return (
        <div className='list'>
            <div className='container'>
                <h1 className='title'>FavoritesPage</h1>
                {!favorites.length ? (
                    <h2 className='title'>You didn't add anything</h2>
                ) : (
                    <div className='list__inner card__row'>
                        {favorites.map((item, index) => (
                            <CardRecipe
                                key={index}
                                image={item.image}
                                name={item.name}
                                isFavorite={true}
                                removeFromFavorites={remove}
                            />
                        ))}
                    </div>
                )}
                <GoBackBtn />
            </div>
        </div>
    )
}
