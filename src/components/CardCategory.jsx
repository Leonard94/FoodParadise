import nophoto from '../assets/img/icon__nophoto.png'
import { NavLink } from 'react-router-dom'

export function CardCategory({ image, name }) {
    return (
        <NavLink
            to={`/category/${name.toLowerCase()}`}
            className='card card-category'
        >
            <div className='card__img card-category__img'>
                <img src={image} alt={`${name}`} />
            </div>
            <div className='card__title card-category__title'>{name}</div>
        </NavLink>
    )
}
