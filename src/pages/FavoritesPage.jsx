import { CardRecipe } from '../components/CardRecipe'
import { useState, useEffect } from 'react'

export function FavoritesPage(props) {
    const { favorites, removeFromFavorites, addToFavorites } = props

    return (
        <div className='list'>
            <div className='container'>
                <h1 className='title'>FavoritePage</h1>
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
                                removeFromFavorites={removeFromFavorites}
                                addToFavorites={addToFavorites}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
