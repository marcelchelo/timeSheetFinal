import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from "react-router-dom"

function Header (){
    return(
        <hader className="header">
            <div className='logo'>
            <Link to='/'> MEGA Software Solutions</Link>
            </div>
           
            <div>
                <ul>
                    <li>
                       <Link to="/login"> <FaSignInAlt/> LogIn</Link> 
                    </li>
                    <li>
                       <Link to="/register"><FaUser/> Register</Link> 
                    </li>
                </ul>
            </div>
        </hader>
    )
}

export default Header