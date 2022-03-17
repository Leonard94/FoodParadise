// Используем try|catch - если у кого-то запрещено записывать в LS

export const loadState = () => {
    try {
        const savedState = localStorage.getItem('favorites')

        if (savedState === null) {
            // Если такого нет передаём undefined - сработают дефолты
            return undefined
        }

        return JSON.parse(savedState)

    } catch (err) {
        return undefined
    }
}

export const saveState = (state) => {
    try {
        const stateToBeSaved = JSON.stringify(state)
        localStorage.setItem('favorites', stateToBeSaved)
    } catch (err) {
        console.log(err)
    }
}
