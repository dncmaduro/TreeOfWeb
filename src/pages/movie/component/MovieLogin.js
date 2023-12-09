import { useState } from 'react';
import './MovieLogin.scss'
import { AUTH_TOKEN } from '../const'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../../../app/movie/authSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const MovieLogin = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        switch (e.target.name) {
            case 'username':
                setUsername(e.target.value)
                break;
            case 'password':
                setPassword(e.target.value)
                break;
            default:
                break;
        }
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const getTokenConfig = {
            method: 'get',
            url: 'https://api.themoviedb.org/3/authentication/token/new',
            headers: {
                'Authorization': AUTH_TOKEN,
                'Accept': 'application/json'
            }
        }

        axios(getTokenConfig).then(res => {
            console.log(JSON.stringify(res.data))
            const requestToken = res.data.request_token;

            const loginConfig = {
                method: 'post',
                url: 'https://api.themoviedb.org/3/authentication/token/validate_with_login',
                headers: {
                    'Authorization': AUTH_TOKEN,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                data: {
                    username,
                    password,
                    request_token: requestToken
                }
            }

            axios(loginConfig).then(res => {
                console.log(res.data)
                dispatch(login({
                    username,
                    request_token: requestToken
                }))
                navigate('/movie/home')
                toast.success('Login successfully!')
            }).catch(error => {
                console.log(error)
                toast.error('Wrong username or password!')
            })
        }).catch(error => {
            console.log(error)
        })
    }

    return <>
        <div className='movie-login'>
            <b className='movie-login-title'>Welcome to Movie Website by Maduro</b>
            <div className='movie-login-box'>
                <span>Login</span>
                <form onSubmit={(e) => handleLogin(e)}>
                    <input type='text' name='username' className='movie-login-input' placeholder='Username' onChange={(e) => handleInputChange(e)}></input>
                    <input type='password' name='password' className='movie-login-input movie-login-password' placeholder='Password' onChange={(e) => handleInputChange(e)}></input>
                    <input type='submit' value={'Login'} className='movie-login-submit'></input>
                </form>
            </div>
        </div>
    </>
}

export default MovieLogin;