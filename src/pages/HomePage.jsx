import { Search } from '../components/Search'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { getSearchResults } from '../api'
import { useState, useEffect } from 'react'
import { CardRecipe } from '../components/CardRecipe'
import iconPork from '../assets/img/icon__pork.svg'
import iconBeef from '../assets/img/icon__beef.svg'
import iconChicken from '../assets/img/icon__chicken.svg'
import iconDessert from '../assets/img/icon__dessert.svg'
import iconPasta from '../assets/img/icon__pasta.svg'
import iconVegan from '../assets/img/icon__vegan.svg'

export function HomePage(props) {
    const [search, setSearch] = useState('')
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        if (search === '') {
        } else {
            getSearchResults(search).then((data) => setSearchResult(data.meals))
        }
    }, [search])

    return (
        <>
            <section className='banner'>
                <div className='container'>
                    <div className='banner__inner'>
                        <div className='banner__title'>
                            The Resipe Of Food Paradise!
                        </div>
                        <Search setSearch={setSearch} />
                    </div>
                </div>
            </section>

            {searchResult === null ? (
                <div className='container'>
                    <h2 className='title title-search'>No results found for '{search}'</h2>
                </div>
            ) : !searchResult.length ? null : (
                <section className='search'>
                    <div className='container'>
                        <div className='title'>Results for '{search}'</div>
                        <div className='card__row card__search'>
                            {searchResult.map((resipe) => (
                                <CardRecipe
                                    key={resipe.idMeal}
                                    image={resipe.strMealThumb}
                                    name={resipe.strMeal}
                                    isFavorite={
                                        resipe.isFavorite ? true : false
                                    }
                                    addToFavorites={props.addToFavorites}
                                    removeFromFavorites={
                                        props.removeFromFavorites
                                    }
                                />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* {!searchResult.length ? null : (
                <section className='search'>
                    <div className='container'>
                        <div className='title'>Results for {search}</div>
                        <div className='list__inner card__row'>
                            {searchResult === null ? (
                                <h1>Упс, ничего не найдено!</h1>
                            ) : (
                                searchResult.map((resipe) => (
                                    <CardRecipe
                                        key={resipe.idMeal}
                                        image={resipe.strMealThumb}
                                        name={resipe.strMeal}
                                        isFavorite={
                                            resipe.isFavorite ? true : false
                                        }
                                        addToFavorites={props.addToFavorites}
                                        removeFromFavorites={
                                            props.removeFromFavorites
                                        }
                                    />
                                ))
                            )}
                        </div>
                    </div>
                </section>
            )} */}

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
                            to='/category/beef'
                            className='section-categories__item'
                        >
                            <img
                                className='section-categories__item-img'
                                src={iconBeef}
                                alt='noicon'
                            />
                            <span className='section-categories__item-title'>
                                Beef
                            </span>
                        </NavLink>
                        <NavLink
                            to='/category/chicken'
                            className='section-categories__item'
                        >
                            <img
                                className='section-categories__item-img'
                                src={iconChicken}
                                alt='noicon'
                            />
                            <span className='section-categories__item-title'>
                                Chicken
                            </span>
                        </NavLink>
                        <NavLink
                            to='/category/dessert'
                            className='section-categories__item'
                        >
                            <img
                                className='section-categories__item-img'
                                src={iconDessert}
                                alt='noicon'
                            />
                            <span className='section-categories__item-title'>
                                Desserts
                            </span>
                        </NavLink>
                        <NavLink
                            to='/category/pasta'
                            className='section-categories__item'
                        >
                            <img
                                className='section-categories__item-img'
                                src={iconPasta}
                                alt='noicon'
                            />
                            <span className='section-categories__item-title'>
                                Pasta
                            </span>
                        </NavLink>
                        <NavLink
                            to='/category/pork'
                            className='section-categories__item'
                        >
                            <img
                                className='section-categories__item-img'
                                src={iconPork}
                                alt='noicon'
                            />
                            <span className='section-categories__item-title'>
                                Pork
                            </span>
                        </NavLink>
                        <NavLink
                            to='/category/vegan'
                            className='section-categories__item'
                        >
                            <img
                                className='section-categories__item-img'
                                src={iconVegan}
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
                        <Link
                            to='recipe/Chicken Alfredo Primavera'
                            className='section-recipes__item'
                        >
                            <img
                                src='https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg'
                                alt='Chicken Alfredo Primavera'
                            />
                            <span>Chicken Alfredo Primavera</span>
                        </Link>
                        <Link
                            to='recipe/spaghetti alla carbonara'
                            className='section-recipes__item'
                        >
                            <img
                                src='https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg'
                                alt='Spaghetti alla Carbonara'
                            />
                            <span>Spaghetti alla Carbonara</span>
                        </Link>
                        <Link
                            to='recipe/cream cheese tart'
                            className='section-recipes__item'
                        >
                            <img
                                src='https://www.themealdb.com/images/media/meals/wurrux1468416624.jpg'
                                alt='Cream Cheese Tart'
                            />
                            <span>Cream Cheese Tart</span>
                        </Link>
                        <Link
                            to='recipe/choc chip pecan pie'
                            className='section-recipes__item'
                        >
                            <img
                                src='https://www.themealdb.com/images/media/meals/rqvwxt1511384809.jpg'
                                alt='Choc Chip Pecan Pie'
                            />
                            <span>Choc Chip Pecan Pie</span>
                        </Link>
                        <Link
                            to='recipe/pizza express margherita'
                            className='section-recipes__item'
                        >
                            <img
                                src='https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg'
                                alt='Pizza Express Margherita'
                            />
                            <span>Pizza Express Margherita</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
