import '../styles/sidebar.css'

import { Link, useLocation } from 'react-router-dom'

function Sidebar({ menu }) {

    const { pathname } = useLocation()

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h1>@organization</h1>
            </div>
            <ul>
                {
                    menu && menu.map((item, index) => (
                        <li key={index}>
                            <Link 
                                to={item.link && item.link} 
                                className={`navigator ${pathname === item.link && item.link ? 'active' : ''}`}
                            >
                                {item.icon && item.icon} {item.title && item.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Sidebar