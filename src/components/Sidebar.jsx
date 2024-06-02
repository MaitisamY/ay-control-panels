import '../styles/sidebar.css'

import { Link, useLocation } from 'react-router-dom'

function Sidebar({ menu }) {

    const { pathname } = useLocation()

    return (
        <div className='sidebar'>
            <div class="sidebar-header">
                <h2>@organization</h2>
            </div>
            <ul>
                {menu.map((item, index) => (
                    <li key={index}>
                        <Link to={item.link} className={`navigator ${pathname === item.link ? 'active' : ''}`}>{item.icon} {item.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar