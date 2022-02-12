export function Ingredients(props) {
    return (
        <ul>
            {Object.keys(props.detailRecipe).map((key) => {
                if (key.includes('Ingredient') && props.detailRecipe[key]) {
                    return (
                        <li key={key}>
                            {`${props.detailRecipe[key].slice(0,1).toUpperCase() + props.detailRecipe[key].slice(1)} : `}
                            <span>
                                {
                                    props.detailRecipe[
                                        `strMeasure${key.slice(13)}`
                                    ]
                                }
                            </span>
                        </li>
                    )
                }
                return null
            })}
        </ul>
    )
}
