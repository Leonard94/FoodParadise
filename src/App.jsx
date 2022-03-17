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

    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/categories' element={<CategoriesPage />} />
                    <Route
                        path='/category/:category'
                        element={<RecipesPage />}
                    />
                    <Route path='/recipe/:recipe' element={<RecipePage />} />
                    <Route path='/favorites' element={<FavoritesPage />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}
