import '../styles/boxOne.css'

import { useAuth } from '../context/AuthContext'
import { FaBars, FaRegBell, FaRegUser, FaPowerOff } from 'react-icons/fa6'

function BoxOne() {

    const { user, logout } = useAuth()

    return (
        <div className="boxOne">
            <a id="menu-btn"><FaBars /></a>
            <h3><FaRegBell /></h3>
            <h4><FaRegUser /> {user?.name}</h4>
            <h4 onClick={logout}><FaPowerOff /></h4>
        </div>
    )
}

export default BoxOne