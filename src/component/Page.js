import './Page.scss'
import Home from '../pages/Home';
import { Route, Routes } from 'react-router-dom'
import Currency from '../pages/currency/Currency';
import Movie from '../pages/movie/Movie';

const Page = () => {
    return <>
        <div className='page'>
            <div className='page-box'>
                <Routes >
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/currency' element={<Currency />}></Route>
                    <Route path='/movie' element={<Movie />}></Route>
                </Routes>
            </div>
        </div>
    </>
}

export default Page;