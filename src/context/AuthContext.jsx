import { createContext, useContext, useState, useEffect } from 'react';
import useResponsiveSidebarStore from '../stores/useResponsiveSidebarStore';
import { addStorageEventListener } from '../utils/eventListeners.js';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

    const { onToggleSidebar } = useResponsiveSidebarStore();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    addStorageEventListener('user', (newValue) => {
        setUser(JSON.parse(newValue));
    });

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        onToggleSidebar();
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
