import './Page.scss'
import Home from '../pages/Home';
import { Route, Routes } from 'react-router-dom'
import Currency from '../pages/currency/Currency';
import Movie from '../pages/movie/Movie';
import MovieLogin from '../pages/movie/component/MovieLogin';
import NotLogged from '../pages/movie/component/auth-component/NotLogged';
import MovieHome from '../pages/movie/component/MovieHome';
import { Toaster } from 'react-hot-toast';
import Logged from '../pages/movie/component/auth-component/Logged';

const Page = () => {
    return <>
        <div className='page'>
            <div className='page-box'>
                <Routes >
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/currency' element={<Currency />}></Route>
                    <>
                        <Route path='/movie' element={<NotLogged><Movie /></NotLogged>}></Route>
                        <Route path='/movie/login' element={<NotLogged><MovieLogin /></NotLogged>}></Route>
                        <Route path='/movie/home' element={<Logged><MovieHome /></Logged>}></Route>
                    </>
                </Routes>
                <Toaster toastOptions={{
                    style: {
                        background: 'black',
                        color: 'white',
                    }
                }} />
            </div>
        </div>
    </>
}

export default Page;