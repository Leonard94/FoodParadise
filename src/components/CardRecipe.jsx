import { NavLink } from 'react-router-dom'
import heartFill from '../assets/img/icon__heart--fill.png'
import heartStroke from '../assets/img/icon__heart--stroke.png'

export function CardRecipe(props) {
    const {
        image,
        name,
        isFavorite = false,
        addFavorite,
        removeFromFavorites,
    } = props

    return (
        <div className='card-recipe'>
            <img
                className='card-recipe__add-remove'
                src={isFavorite ? heartFill : heartStroke}
                onClick={
                    isFavorite
                        ? () => removeFromFavorites(name)
                        : () => addFavorite({ image, name })
                }
                alt={`${
                    isFavorite
                        ? 'remove from favorite icon'
                        : 'add to favorite icon'
                }`}
            />
            <NavLink
                to={`/recipe/${name.toLowerCase()}`}
                className='card-recipe__img'
            >
                <img src={image} alt={`${name}`} />
                <div className='card-recipe__title'>{name}</div>
            </NavLink>
        </div>
    )
}
