import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { RecipesPage } from './pages/RecipesPage'
import { RecipePage } from './pages/RecipePage'
import { CategoriesPage } from './pages/CategoriesPage'
import { FavoritesPage } from './pages/FavoritesPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

export function App() {
    const [favorites, setFavorites] = useState([])

    useEffect(updateLocalStorage, [favorites])

    useEffect(() => {
        if (localStorage.getItem('favorites')) {
            const favoritesFromLocalState = JSON.parse(
                localStorage.getItem('favorites')
            )
            setFavorites(favoritesFromLocalState)
        }
    }, [])

    const removeFromFavorites = (name) => {
        setFavorites(favorites.filter((item) => item.name !== name))
    }

    const addToFavorites = (obj) => {
        console.log('Пришёл такой объект для добавления в Favorites =>>', obj)
        if (
            (favorites.find((item) => item.name === obj.name) && true) ||
            false
        ) {
            console.log('Такой объект есть, ничего не добавляем')
        } else {
            setFavorites([...favorites, obj])
        }
    }

    function updateLocalStorage() {
        if (favorites.length) {
            localStorage.setItem('favorites', JSON.stringify(favorites))
        }
    }

    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/categories' element={<CategoriesPage />} />
                    <Route
                        path='/category/:category'
                        element={
                            <RecipesPage
                                removeFromFavorites={removeFromFavorites}
                                addToFavorites={addToFavorites}
                                favorites={favorites}
                            />
                        }
                    />
                    <Route path='/recipe/:recipe' element={<RecipePage />} />
                    <Route
                        path='/favorites'
                        element={
                            <FavoritesPage
                                favorites={favorites}
                                removeFromFavorites={removeFromFavorites}
                                addToFavorites={addToFavorites}
                            />
                        }
                    />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}
