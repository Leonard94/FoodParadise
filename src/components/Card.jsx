import nophoto from '../assets/img/icon__nophoto.png'
import { NavLink } from 'react-router-dom'

export function Card({ image, name, isCategory }) {
    return (
        <NavLink
            to={isCategory ? `/categories/${name.toLowerCase()}` : `/recipe/${name.toLowerCase()}`}
            className='card'
        >
            <div className='card__img'>
                <img src={image} alt={`${name}`} />
            </div>
            <div className='card__title'>{name}</div>
        </NavLink>
    )
}
