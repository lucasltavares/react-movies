import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  const movieNumber = 1;

  return (
    <>
    {movieNumber === 1 ? <MovieCard movie={{"title": "The Matrix", "release_date": "1999", "poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"}} /> : <h1>Movie not found</h1>}
    </>
  )
}

export default App
