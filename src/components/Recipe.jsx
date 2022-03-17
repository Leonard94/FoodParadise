import { Ingredients } from './Ingredients'
import { GoBackBtn } from './GoBackBtn'

export const Recipe = ({
    detailRecipe,
    isFavorite,
    removeFavorite,
    addFavorite,
}) => {
    const {
        strMeal: name,
        strCategory: category,
        strArea: area,
        strInstructions: instructions,
        strMealThumb: image,
        strYoutube: video,
    } = detailRecipe

    return (
        <section className='recipe'>
            <div className='container'>
                <h1 className='title'>{name}</h1>
                <div className='recipe__row'>
                    <img src={image} alt={name} />
                    <div className='recipe__ingredients'>
                        <h3 className='recipe__title'>Ingredients:</h3>
                        <Ingredients detailRecipe={detailRecipe} />
                    </div>
                    <button
                        className={`btn btn__favorite ${isFavorite && 'btn__favorite--true'}`}
                        onClick={
                            isFavorite
                                ? () => removeFavorite(name)
                                : () => addFavorite({ image, name })
                        }
                    >
                        {isFavorite
                            ? 'Remove From Favorite'
                            : 'Add to Favorite'}
                    </button>
                </div>

                <div className='recipe__instructions'>
                    <h3 className='recipe__title'>Instructions:</h3>
                    <p>{instructions}</p>
                </div>
                {video ? (
                    <iframe
                        title={name}
                        src={`https://www.youtube.com/embed/${video.slice(
                            -11
                        )}`}
                        allowFullScreen
                    />
                ) : null}
                <h6>Category: {category}</h6>
                <h6>Area: {area}</h6>
                <br />
                <GoBackBtn />
            </div>
        </section>
    )
}
