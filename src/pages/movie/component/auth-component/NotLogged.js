import { useSelector } from 'react-redux';
import { selectLoggedIn } from '../../../../app/movie/authSlice'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotLogged = ({ children }) => {

    const navigate = useNavigate();
    const isLoggedIn = useSelector(selectLoggedIn);

    useEffect(() => {
        if (isLoggedIn) {
            setTimeout(() => {
                navigate('/movie/home')
            }, 2000)
        }
    })


    return !isLoggedIn ? children : <div>Bạn đã đăng nhập, hệ thống sẽ điều hướng bạn về trang chủ</div>;
}

export default NotLogged