import '../styles/sidebar.css'

import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useOrganization } from '../context/OrganizationContext'
import { Link, useLocation } from 'react-router-dom'
import { TfiPencilAlt, TfiClose, TfiCheckBox } from 'react-icons/tfi'
import { MdCircle } from 'react-icons/md'
import { useWindowActive }  from '../utils/eventListeners.js'

function Sidebar({ menu }) {

    const { user } = useAuth()
    const { pathname } = useLocation()
    const { organization, updateOrganization } = useOrganization()
    const [editMode, setEditMode] = useState(false)
    const [organizationName, setOrganizationName] = useState(organization)
    const [isError, setIsError] = useState(false)
    const isActive = useWindowActive()

    const toggleEditMode = () => {
        setEditMode(!editMode)
    }

    const handleChange = (e) => {
        setOrganizationName(e.target.value)
    }

    const handleSubmit = () => {
        if (organizationName.length > 16) {
            setIsError(true)
            return
        }
        const result = updateOrganization(organizationName)
        if (result) setEditMode(false)
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            if (organizationName.length > 16) {
                setIsError(true)
                return
            }
            handleSubmit()
        }
    }

    useEffect(() => {
        setOrganizationName(organization)
    }, [organization])

    useEffect(() => {
        if (organizationName.length > 16) {
            setIsError(true)
            return
        } else {
            setIsError(false)
        }
    }, [organizationName])

    return (
        <div className="sidebar-wrapper">
            <div className="role-span">
                {user?.role && user?.role.charAt(0).toUpperCase() + user?.role.slice(1)}
                <MdCircle style={{ color: isActive ? 'rgb(50, 197, 50)' : 'rgb(197, 50, 50)' }} size={14} />
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
        </div>
    )
}

export default Sidebar