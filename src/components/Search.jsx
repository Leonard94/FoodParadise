import { useState } from 'react'

export function Search(props) {
    const [value, setValue] = useState('')

    const handleSubmit = () => {
        props.setSearch(value.trim())
        setValue('')
    }

    return (
        <div className='search'>
            <input
                className='search__input'
                type='search'
                placeholder='Search for a meal . . .'
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSubmit()
                }}
            />
            <button onClick={handleSubmit} className='btn btn--search'>
                Search
            </button>
        </div>
    )
}
