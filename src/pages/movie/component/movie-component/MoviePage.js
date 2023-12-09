import './MoviePage.scss'
import MovieList from './movie-sub-page/MovieList'

const MoviePage = () => {
    return <>
        <div className='movie-page'>
            <h3><b>Movies you may be interested in: </b></h3>
            <MovieList />
        </div>
    </>
}

export default MoviePage