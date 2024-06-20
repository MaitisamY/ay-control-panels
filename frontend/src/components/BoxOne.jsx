import '../styles/boxOne.css';

import { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import useThemeContainerStore from '../stores/useThemeContainerStore.js';
import { FaAnglesRight } from 'react-icons/fa6';
import { TfiBell, TfiUser, TfiSettings, TfiEmail } from 'react-icons/tfi';
import { GoSignOut, GoChevronDown, GoChevronUp } from 'react-icons/go';

function BoxOne() {

    const { user, logout } = useAuth()
    const { toggleThemeContainer } = useThemeContainerStore();

    const [dropdown, setDropdown] = useState(null);
    const dropdownRef = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdown(null);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleDropdown = (dropdownType) => {
        setDropdown((prevDropdown) => {
            if (prevDropdown === dropdownType) {
                return null;
            } else {
                return dropdownType;
            }
        });
    };

    const { pathname } = useLocation();
    const navigate = useNavigate();

    return (
        <>
            <div className="boxOne" ref={dropdownRef}>
                <a 
                    onClick={() => toggleDropdown('notification')}
                    className={`common-link ${pathname === '/admin/notifications' ? 'active' : ''}`}
                    title="Notifications"
                >
                    <span><TfiBell /></span>
                </a>
                {
                    dropdown === 'notification' && (
                        <div className="dropdown">
                            <div className="dropdown-arrow" style={{ left: '90%' }}></div>
                            <div className="dropdown-content">
                                <h5>No notifications yet!</h5>
                            </div>
                            <button onClick={() => navigate('/admin/notifications')}>
                                Go to Notifications <span><FaAnglesRight /></span>
                            </button>
                        </div>
                    )
                }
            </div>
            {
                user?.role === 'client' &&
                <div className="boxOne">
                    <a
                        onClick={() => toggleDropdown('inbox')}
                        className={`common-link ${pathname === '/client/inbox' ? 'active' : ''}`}
                        title="Inbox"
                    >
                        <span><TfiEmail /></span>
                    </a>
                    {
                        dropdown === 'inbox' && (
                            <div className="dropdown">
                                <div className="dropdown-arrow" style={{ left: '90%' }}></div>
                                <div className="dropdown-content">
                                    <h5>No messages yet!</h5>
                                </div>
                                <button onClick={() => navigate('/client/inbox')}>
                                    Go to Inbox <span><FaAnglesRight /></span>
                                </button>
                            </div>
                        )
                    }
                </div>
            }
            <div className="boxOne" ref={dropdownRef}>
                <a 
                    onClick={() => toggleDropdown('profile')} 
                    className={`common-link ${pathname === '/user/profile' ? 'active' : ''}`}
                >
                    Hi! {user?.name.slice(0, 10)} {user?.name.length > 10 ? '...' : ''} {' '}
                    {dropdown === 'profile' ? <GoChevronUp size={18} /> : <GoChevronDown size={18} />}
                </a>
                {
                    dropdown === 'profile' && (
                        <div className="dropdown">
                            <div className="dropdown-arrow" style={{ left: '78%' }}></div>
                            <div className="dropdown-content">
                                <TfiUser size={35} />
                                <p>{user?.email.slice(0, 18)} {user?.email.length > 18 ? '...' : ''}</p>
                            </div>
                            <Link className="link" to="/admin/profile">Edit Profile</Link>
                            <button onClick={logout}>Logout <span><GoSignOut /></span></button>
                        </div>
                    )
                }
            </div>
            <div className="boxOne">
                <a className="common-link" onClick={toggleThemeContainer}><span><TfiSettings /></span></a>
            </div>
        </>
    )
}

export default BoxOne