import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link, useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux'

import {logout, reset} from '../features/auth/authSlice'

function Header (){

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector((state)=> state.auth)
    

    const onLogout = () =>{
        dispatch(logout())
        dispatch(reset())
        navigate("/")
    }

    return(
        <header className="header">
            <div className='logo'>
            <Link to='/'> MEGA Software Solutions</Link>
            </div>
           
            <div>
                <ul>
                    {user? (
                        <li>
                            <button className='btn' onClick={onLogout}> <FaSignOutAlt/> LogOut</button>
                        </li>
                    ) : (
                    <>
                    <li>
                       <Link to="/login"> <FaSignInAlt/> LogIn</Link> 
                    </li>
                    <li>
                       <Link to="/register"><FaUser/> Register</Link> 
                    </li>
                    </>
                    ) }
                    
                </ul>
            </div>
        </header>
    )
}

export default Header