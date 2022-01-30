import nophoto from '../assets/img/icon__nophoto.png'
import { NavLink } from 'react-router-dom'

export function Card() {
    return (
        <NavLink to='/sd' className='card'>
            <div className='card__img'>
                <img src={nophoto} alt='' />
            </div>
            <div className='card__title'>Mushroom soup with buckweat</div>
        </NavLink>
    )
}
