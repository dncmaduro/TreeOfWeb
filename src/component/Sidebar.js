import { useState } from 'react';
import Logo from '../assets/images/logo.png';
import './Sidebar.scss'
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {

    return <>
        <div className='sidebar'>
            <div className='sidebar-box'>
                <div className='sidebar-1'>
                    <img className='sidebar-logo' src={Logo}></img>
                    <input className='sidebar-search' type='text' placeholder='Search by code'></input>
                    <Link to={'/'}>
                        <button className='sidebar-home sidebar-bottom'>
                            Home
                        </button>
                    </Link>
                    <Link to={'/currency'}>
                        <button className='sidebar-home sidebar-bottom'>
                            Currency Web
                        </button>
                    </Link>
                    <Link to={'/movie'}>
                        <button className='sidebar-home sidebar-bottom'>
                            Movie Web
                        </button>
                    </Link>
                </div>
                <div className='sidebar-2'>
                    <button className='sidebar-setting sidebar-top'>Settings</button>
                </div>
            </div>
        </div>
    </>
}

export default Sidebar