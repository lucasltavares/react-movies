import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react"
import { getPopularMovies, searchMovies } from "../services/api";
import '../css/Home.css'

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const[error, setError] = useState(null);
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (error) {
                console.error("Failed to load popular movies:", error);
                setError("Failed to load movies...");
            } finally {
                setLoading(false);
            }
        };

        loadPopularMovies();
    }, [])

    const handleSearch = (e) => {
        e.preventDefault();
        alert(`Searching for ${searchQuery}`);
        setSearchQuery("");
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            {error && <p className="error">{error}</p>}
            {loading ? <div className="loading">Loading...</div> : 
            <div className="movies-grid">
                {movies.map((movie) => (
                    movie.title.toLowerCase().includes(searchQuery.toLowerCase()) && <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>}
        </div>
    )
}

export default Home
