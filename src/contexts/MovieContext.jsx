import {createContext, useState, useEffect, useContext} from 'react'

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

// provide state to any of the components that are wrapped around it.
export const MovieProvider = ({children}) => { // Children é o componente filho (ex. App é filho de browserRouter)
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem('favorites')

        if (storedFavs) {
            setFavorites(JSON.parse(storedFavs)) // transforma em JSON pois o localStorage armazena em string.
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie]) // prev = previous state
    }

    const removeFromFavorites = (movie) => {
        setFavorites(prev => prev.filter(fav => fav.id !== movie.id))
    }

    const isFavorite = (movieId) => {
        return favorites.some(fav => fav.id === movieId)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}