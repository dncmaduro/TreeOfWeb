import './MovieHome.scss'
import MovieHeader from './movie-component/MovieHeader'
import MoviePage from './movie-component/MoviePage'

const MovieHome = () => {
    return <>
        <div className='movie-home'>
            <MovieHeader />
            <MoviePage />
        </div>
    </>
}

export default MovieHome