import { useSelector } from 'react-redux';
import { selectLoggedIn } from '../../../../app/movie/authSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Logged = ({ children }) => {

    const navigate = useNavigate()
    const isLoggedIn = useSelector(selectLoggedIn);

    useEffect(() => {
        if (!isLoggedIn) {
            setTimeout(() => {
                navigate('/movie/login')
            }, 2000)
        }
    })


    return isLoggedIn ? children : <div>Bạn cần đăng nhập để tiếp tục. Chúng tôi sẽ chuyển hướng bạn sang trang đăng nhập.</div>;
}

export default Logged