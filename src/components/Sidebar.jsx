import '../styles/sidebar.css';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useOrganization } from '../context/OrganizationContext';
import { Link, useLocation } from 'react-router-dom';
import { TfiPencilAlt, TfiClose, TfiCheckBox } from 'react-icons/tfi';
import { MdCircle } from 'react-icons/md';
import { useWindowActive } from '../utils/eventListeners.js';
import { FaChevronDown } from 'react-icons/fa6';

function Sidebar({ menu }) {
    const { user } = useAuth();
    const { pathname } = useLocation();
    const { organization, updateOrganization } = useOrganization();
    const [editMode, setEditMode] = useState(false);
    const [organizationName, setOrganizationName] = useState(organization);
    const [isError, setIsError] = useState(false);
    const [dropdownState, setDropdownState] = useState({});
    const [dropdownManuallyChanged, setDropdownManuallyChanged] = useState(false); 
    const isActive = useWindowActive();

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    const handleChange = (e) => {
        setOrganizationName(e.target.value);
    };

    const toggleDropdown = (index) => {
        setDropdownState(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
        setDropdownManuallyChanged(true); 
    };

    const handleSubmit = () => {
        if (organizationName.length > 16) {
            setIsError(true);
            return;
        }
        const result = updateOrganization(organizationName);
        if (result) setEditMode(false);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            if (organizationName.length > 16) {
                setIsError(true);
                return;
            }
            handleSubmit();
        }
    };

    useEffect(() => {
        setOrganizationName(organization);
    }, [organization]);

    useEffect(() => {
        if (organizationName.length > 16) {
            setIsError(true);
            return;
        } else {
            setIsError(false);
        }
    }, [organizationName]);

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
        <div className="sidebar-wrapper">
            <div className="role-span">
                {user?.role && user?.role.charAt(0).toUpperCase() + user?.role.slice(1)}
                <MdCircle className={isActive ? 'active' : 'inactive'} size={14} />
            </div>
            <div className="sidebar">
                <div className="sidebar-header">
                    <h1>
                        {user && user.role === 'admin' ? (
                            <>
                                <a className="opener-closer" onClick={toggleEditMode}>
                                    {editMode ? <TfiClose /> : <TfiPencilAlt />}
                                </a>
                                {editMode ? (
                                    <>
                                        <input
                                            type="text"
                                            value={organizationName}
                                            autoFocus
                                            onChange={handleChange}
                                            onKeyPress={handleKeyPress}
                                        />
                                        <p><strong>Max length:</strong> <span style={{ color: isError ? 'red' : '' }}>16 characters</span></p>
                                        <a className="done-button" onClick={handleSubmit}>
                                            <TfiCheckBox />
                                        </a>
                                    </>
                                ) : (
                                    organization
                                )}
                            </>
                        ) : (
                            organization
                        )}
                    </h1>
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
                                    <a className={dropdownState[index] ? 'open' : ''}>
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
                                    </a>
                                }
                            </Link>
                            {dropdownState[index] && item.hasChildMenu && (
                                <ol className="sub-menu">
                                    {item.childMenu && item.childMenu.map((childItem, childIndex) => (
                                        <li key={childIndex}>
                                            <Link
                                                to={childItem.link && childItem.link}
                                                className={`small-navigator ${pathname === childItem.link ? 'active' : ''}`}
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
    );
}

export default Sidebar;
