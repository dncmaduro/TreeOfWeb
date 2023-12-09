import './MovieHeader.scss'
import { Navbar, Container, Dropdown } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { selectUsername, logout } from '../../../../app/movie/authSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const MovieHeader = () => {

    const username = useSelector(selectUsername)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = (e) => {
        e.preventDefault();

        dispatch(logout({}))
        navigate('/movie')
    }

    return <>
        <div className='movie-header'>
            <Navbar className="movie-navbar">
                <Container>
                    <Navbar.Brand href="/movie/home">Movie By Maduro</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text className='movie-header-account'>
                            <span>Signed in as:</span> <Dropdown className='movie-header-dropdown'>
                                <Dropdown.Toggle id="dropdown-basic">
                                    {username}
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='movie-header-dropdown-menu'>
                                    <Dropdown.Item>Account</Dropdown.Item>
                                    <Dropdown.Item onClick={(e) => handleLogout(e)}>Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    </>
}

export default MovieHeader