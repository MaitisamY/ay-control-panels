import '../styles/sidebar.css'

import { Link, useLocation } from 'react-router-dom'

const ResponsiveSidebar = ({ menu }) => {

    const { pathname } = useLocation()

    return (
        <ul>
            {
                menu && menu.map((item, index) => (
                    <li key={index}>
                        {
                            item.onHandleClick ?
                                <a onClick={item.onHandleClick} className={`navigator ${pathname === item.link && item.link ? 'active' : ''}`}>
                                    {item.icon && item.icon} {item.title && item.title}
                                </a>
                                :
                                <Link
                                    to={item.link && item.link}
                                    className={`navigator ${pathname === item.link && item.link ? 'active' : ''}`}
                                >
                                    {item.icon && item.icon} {item.title && item.title}
                                </Link>
                        }
                    </li>
                ))
            }
        </ul>
    )
}

export default ResponsiveSidebar