import { Card } from '../components/Card'
import { PreloaderItem } from '../components/PreloaderItem'

export function CategoriesPage() {
    return (
        <>
            <section className='categories'>
                <div className='container'>
                    <h1 className='title'>Categories</h1>
                    <div className='categories__inner card__row'>
                        {/* <PreloaderItem /> */}
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </section>
        </>
    )
}
