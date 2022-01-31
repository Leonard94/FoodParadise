import { Search } from '../components/Search'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import noicon from '../assets/img/icon__noicon.png'

export function HomePage() {
    return (
        <>
            <section className='banner'>
                <div className='container'>
                    <div className='banner__inner'>
                        <div className='banner__title'>
                            The Resipe Of Food Paradise!
                        </div>
                        <Search />
                    </div>
                </div>
            </section>
            <section className='section-categories'>
                <div className='container'>
                    <div className='section-categories__title-row'>
                        <div className='section-categories__title title'>
                            Categories
                        </div>
                        <NavLink to='categories'>All Categories</NavLink>
                    </div>
                    <div className='section-categories__inner'>
                        <NavLink
                            to='/categories/beef'
                            className='section-categories__item'
                        >
                            <img
                                className='section-categories__item-img'
                                src={noicon}
                                alt='noicon'
                            />
                            <span className='section-categories__item-title'>
                                Beef
                            </span>
                        </NavLink>
                        <NavLink
                            to='/categories/chicken'
                            className='section-categories__item'
                        >
                            <img
                                className='section-categories__item-img'
                                src={noicon}
                                alt='noicon'
                            />
                            <span className='section-categories__item-title'>
                                Chicken
                            </span>
                        </NavLink>
                        <NavLink
                            to='/categories/dessert'
                            className='section-categories__item'
                        >
                            <img
                                className='section-categories__item-img'
                                src={noicon}
                                alt='noicon'
                            />
                            <span className='section-categories__item-title'>
                                Desserts
                            </span>
                        </NavLink>
                        <NavLink
                            to='/categories/pasta'
                            className='section-categories__item'
                        >
                            <img
                                className='section-categories__item-img'
                                src={noicon}
                                alt='noicon'
                            />
                            <span className='section-categories__item-title'>
                                Pasta
                            </span>
                        </NavLink>
                        <NavLink
                            to='/categories/pork'
                            className='section-categories__item'
                        >
                            <img
                                className='section-categories__item-img'
                                src={noicon}
                                alt='noicon'
                            />
                            <span className='section-categories__item-title'>
                                Pork
                            </span>
                        </NavLink>
                        <NavLink
                            to='/categories/vegan'
                            className='section-categories__item'
                        >
                            <img
                                className='section-categories__item-img'
                                src={noicon}
                                alt='noicon'
                            />
                            <span className='section-categories__item-title'>
                                Vegan
                            </span>
                        </NavLink>
                    </div>
                </div>
            </section>
            <section className='section-recipes'>
                <div className='container'>
                    <div className='section-resipes__title title'>
                        Recipe Of The Month
                    </div>
                    <div className='section-recipes__inner'>
                        <Link to='' className='section-recipes__item'>
                            <img
                                src='https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg'
                                alt='Chicken Alfredo Primavera'
                            />
                            <span>Chicken Alfredo Primavera</span>
                        </Link>
                        <Link to='' className='section-recipes__item'>
                            <img src={noicon} alt='777777' />
                            <span>Recipe Title</span>
                        </Link>
                        <Link to='' className='section-recipes__item'>
                            <img src={noicon} alt='777777' />
                            <span>Recipe Title</span>
                        </Link>
                        <Link to='' className='section-recipes__item'>
                            <img src={noicon} alt='777777' />
                            <span>Recipe Title</span>
                        </Link>
                        <Link to='' className='section-recipes__item'>
                            <img src={noicon} alt='777777' />
                            <span>Recipe Title</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
