import '../styles/boxOne.css';

import { useAuth } from '../context/AuthContext';
import useThemeContainerStore from '../stores/useThemeContainerStore.js';
import { TfiBell, TfiUser, TfiSettings, TfiEmail } from 'react-icons/tfi';
import { GoSignOut } from 'react-icons/go';

function BoxOne() {

    const { user, logout } = useAuth()
    const { toggleThemeContainer } = useThemeContainerStore();

    return (
        <>
            <div className="boxOne">
                <a><span><TfiBell /></span></a>
            </div>
            {
                user?.role === 'client' &&
                <div className="boxOne">
                    <a><span><TfiEmail /></span></a>
                </div>
            }
            <div className="boxOne">
                <a>Hi! {user?.name.slice(0, 10)} {user?.name.length > 10 ? '...' : ''} </a>
            </div>
            <div className="boxOne">
                <a onClick={logout}><span><GoSignOut /></span></a>
            </div>
            <div className="boxOne">
                <a onClick={toggleThemeContainer}><span><TfiSettings /></span></a>
            </div>
        </>
    )
}

export default BoxOne