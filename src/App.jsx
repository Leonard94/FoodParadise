import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { RecipesPage } from './pages/RecipesPage'
import { Recipe } from './components/Recipe'
import { CategoriesPage } from './pages/CategoriesPage'
import { FavoritesPage } from './pages/FavoritesPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { Routes, Route } from 'react-router-dom'

export function App() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/categories' element={<CategoriesPage />} />
                    <Route
                        path='/categories/:category'
                        element={<RecipesPage />}
                    />
                    <Route path='/recipe/:recipe' element={<Recipe />} />
                    <Route path='/favorites' element={<FavoritesPage />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}
