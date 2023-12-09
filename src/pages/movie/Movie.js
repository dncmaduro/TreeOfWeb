import './Movie.scss'
import { Link } from 'react-router-dom';

const Movie = () => {
    return <>
        <div className='movie'>
            <Link to='/movie/login'>Login to Continue</Link>
        </div>
    </>
}

export default Movie;