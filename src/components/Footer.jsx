import { NavLink } from 'react-router-dom'
import youtube from '../assets/img/icon__youtube.svg'
import instagram from '../assets/img/icon__instagram.svg'
import facebook from '../assets/img/icon__facebook.svg'
import twitter from '../assets/img/icon__twitter.svg'

export function Footer() {
    return (
        <footer>
            <div className='container'>
                <div className='footer__inner'>
                    <div className='footer__column footer__categories'>
                        <div className='footer__column-title'>
                            Quick
                            <span className='accent-text'>Categories</span>
                        </div>
                        <ul className='footer__column-list'>
                            <li>
                                <NavLink to='/categories/beef'>Beef</NavLink>
                            </li>
                            <li>
                                <NavLink to='/categories/chicken'>
                                    Chicken
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/categories/desserts'>
                                    Desserts
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/categories/pasta'>Pasta </NavLink>
                            </li>
                            <li>
                                <NavLink to='/categories/pork'>Pork </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className='footer__column footer__categories'>
                        <div className='footer__column-title'>
                            Food
                            <span className='accent-text'>Paradise</span>
                        </div>
                        <p className='footer__column-text'>
                            Ultimate food resources for the cook, with daily
                            kitchen tips, fun cooking videos, and, oh yeah, over
                            283 recipes
                        </p>
                        <div className='footer__column-social'>
                            <img src={youtube} alt='FoodParadise youtube' />
                            <img src={instagram} alt='FoodParadise instagram' />
                            <img src={facebook} alt='FoodParadise facebook' />
                            <img src={twitter} alt='FoodParadise twitter' />
                        </div>
                    </div>

                    <div className='footer__column footer__recipes'>
                        <div className='footer__column-title'>
                            Top
                            <span className='accent-text'>Recipes</span>
                        </div>
                        <ul className='footer__column-list'>
                            <li>
                                <NavLink to='/categories/beef'>Beef</NavLink>
                            </li>
                            <li>
                                <NavLink to='/categories/chicken'>
                                    Chicken
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/categories/desserts'>
                                    Desserts
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/categories/pasta'>Pasta </NavLink>
                            </li>
                            <li>
                                <NavLink to='/categories/pork'>Pork </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className='footer__rights'>
                    © Created by Leonard. All rights{' '}
                    <span className='accent-text'>not</span> reserved
                </p>
            </div>
        </footer>
    )
}
