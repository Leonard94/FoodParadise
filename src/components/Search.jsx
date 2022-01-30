import search from '../assets/img/icon__search.svg'

export function Search() {
    return (
        <div className='search'>
            <input
                className='search__input'
                type='search'
                placeholder='Search for a meal . . .'
            />
            <button className='btn btn--search'>Search</button>
        </div>
    )
}
