import '../styles/sidebar.css'

import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { useOrganization } from '../context/OrganizationContext.jsx';
import useThemeContainerStore from '../stores/useThemeContainerStore.js';
import useResponsiveSidebarStore from '../stores/useResponsiveSidebarStore.js';

import { Link, useLocation } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';

import { GoX } from 'react-icons/go';
import { TfiAlignJustify } from 'react-icons/tfi';
import { FaChevronDown } from 'react-icons/fa6';

const ResponsiveSidebar = ({ menu }) => {

    const { logout } = useAuth();
    const { toggleThemeContainer } = useThemeContainerStore();
    const { isSidebarOpen, onToggleSidebar } = useResponsiveSidebarStore();
    const { organization } = useOrganization();

    const [dropdownState, setDropdownState] = useState({});
    const [dropdownManuallyChanged, setDropdownManuallyChanged] = useState(false); 

    const toggleDropdown = (index) => {
        setDropdownState(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
        setDropdownManuallyChanged(true); 
    };
    
    /* Sidebar ref for NodeRef */
    const sidebarRef = useRef(null);

    /* Get current pathname */
    const { pathname } = useLocation()

    useEffect(() => {
        if (dropdownManuallyChanged) {
            return; 
        }
        const initialDropdownState = menu.reduce((acc, item, index) => {
            acc[index] = item.childMenu && item.childMenu.some(child => child.link === pathname);
            return acc;
        }, {});
        setDropdownState(initialDropdownState);
    }, [menu, pathname, dropdownManuallyChanged]);

    return (
        <CSSTransition
            in={isSidebarOpen}
            timeout={300}
            classNames="responsive-sidebar"
            unmountOnExit
            nodeRef={sidebarRef}
        >
            <div ref={sidebarRef} className="responsive-sidebar">
                <div className="elements-holder">
                    <div className="responsive-sidebar-header">
                        <h1 className="logo">{organization}</h1>
                        <a className="close-btn" onClick={onToggleSidebar}><GoX /></a>
                    </div>
                    <ul>
                        {menu && menu.map((item, index) => (
                            <li key={index}>
                                <Link 
                                    to={item.link && item.link}
                                    onClick={(e) => {
                                        if (!item.link && item.hasChildMenu) {
                                            e.preventDefault();
                                            toggleDropdown(index);
                                        } else if (item.title === 'Logout') {
                                            e.preventDefault();
                                            logout();
                                        } else if (item.title === 'Settings') {
                                            e.preventDefault();
                                            toggleThemeContainer();
                                        } else if (item.link && item.link) {
                                            onToggleSidebar();
                                        }
                                    }}
                                    className={`navigator 
                                        ${
                                            pathname === item.link ? 'active' 
                                            : dropdownState[index] ? 'open' 
                                            : item.childMenu && item.childMenu.some(child => child.link === pathname) ? 'active'
                                            : ''
                                        }
                                    `}
                                >
                                    {item.icon && item.icon} {item.title && item.title} 
                                    {item.hasChildMenu && 
                                        <h5 className={dropdownState[index] ? 'open' : ''}>
                                            {dropdownState[index] ? 
                                                <span>
                                                    <FaChevronDown 
                                                        style={{ 
                                                            transform: 'rotate(180deg)', 
                                                            transition: 'transform 0.2s ease-in-out',
                                                            transformOrigin: '50% 50%',
                                                        }} 
                                                    /> 
                                                </span>
                                                : 
                                                <span>
                                                    <FaChevronDown 
                                                        style={{ 
                                                            transition: 'transform 0.2s ease-in-out', 
                                                            transformOrigin: '50% 50%' 
                                                        }} 
                                                    />
                                                </span>
                                            }
                                        </h5>
                                    }
                                </Link>
                                {dropdownState[index] && item.hasChildMenu && (
                                    <ol className="sub-menu">
                                        {item.childMenu && item.childMenu.map((childItem, childIndex) => (
                                            <li key={childIndex}>
                                                <Link
                                                    to={childItem.link && childItem.link}
                                                    className={`small-navigator ${pathname === childItem.link ? 'active' : ''}`}
                                                    onClick={onToggleSidebar}
                                                >
                                                    {childItem.title && childItem.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ol>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </CSSTransition>
    )
}

export const ResponsiveMenuBar = () => {

    const { organization } = useOrganization();
    const { onToggleSidebar } = useResponsiveSidebarStore();

    return (
        <div className="responsive-menu">
            <h1 className="logo">{organization}</h1>
            <a className="toggler" onClick={onToggleSidebar}><TfiAlignJustify /></a>
        </div>        
   )
}

export default ResponsiveSidebar