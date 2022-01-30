import logo from '../assets/img/logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header__inner'>
                    <a href='/' className='header__logo'>
                        <img src={logo} alt='FoodParadise Logo' />
                    </a>
                    <nav className='menu'>
                        <ul className='menu__list'>
                            <li>
                                <NavLink to='/' className='menu__link'>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/categories'
                                    className='menu__link'
                                >
                                    Categories
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/favorites' className='menu__link'>
                                    Favorites
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
