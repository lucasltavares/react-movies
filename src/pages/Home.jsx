import MovieCard from "../components/MovieCard"
import { useState } from "react"
import '../css/Home.css'

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "The Matrix", release_date: 1999, poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"},,
        {id: 2, title: "The Matrix Reloaded", release_date: 1999, poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"},,
        {id: 3, title: "The Terminator", release_date: 1985, poster: "https://m.media-amazon.com/images/M/MV5BMTg2NjYyNjYxOV5BMl5BanBnXkFtZTgwNTc3NTYxMjI@._V1_SX300.jpg"},
    ]

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

            <div className="movie-grid">
                {movies.map((movie) => (
                    movie.title.toLowerCase().includes(searchQuery.toLowerCase()) && <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}

export default Home
