import '../css/Favorites.css'
import MovieCard from '../components/MovieCard'
import { useMovieContext } from '../contexts/MovieContext'

function Favorites() {
    const {favorites} = useMovieContext()

    if(favorites) {
        return (
            <div className="movies-grid">
                {favorites.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        )
    }

    return (
        <div className="favorites">
            <h2>Favorites</h2>
            <p>No favorites yet</p>
        </div>
    )
}

export default Favorites
