import '../styles/sidebar.css'

import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useOrganization } from '../context/OrganizationContext'
import { Link, useLocation } from 'react-router-dom'
import { TfiPencilAlt, TfiClose, TfiCheckBox } from 'react-icons/tfi'

function Sidebar({ menu }) {

    const { user } = useAuth()
    const { pathname } = useLocation()
    const { organization, updateOrganization } = useOrganization()
    const [editMode, setEditMode] = useState(false)
    const [organizationName, setOrganizationName] = useState(organization)

    const toggleEditMode = () => {
        setEditMode(!editMode)
    }

    const handleChange = (e) => {
        setOrganizationName(e.target.value)
    }

    const handleSubmit = () => {
        updateOrganization(organizationName)
        setEditMode(false)
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit()
        }
    }

    useEffect(() => {
        setOrganizationName(organization)
    }, [organization])

    return (
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
    )
}

export default Sidebar