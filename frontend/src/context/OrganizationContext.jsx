import { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { addStorageEventListener } from '../utils/eventListeners.js';

const OrganizationContext = createContext();

export const OrganizationProvider = ({ children }) => {
    const [organization, setOrganization] = useState(localStorage.getItem('organization') || '@organization');

    useEffect(() => {
        const storedOrganization = localStorage.getItem('organization');
        if (storedOrganization) {
            setOrganization(storedOrganization);
        }
    }, []);

    addStorageEventListener('organization', (newValue) => {
        setOrganization(newValue);
    });

    const updateOrganization = (newOrganization) => {
        if (newOrganization === organization) {
            toast.error(`${newOrganization} is already set!`, {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            return false;
        }
        setOrganization(newOrganization);
        localStorage.setItem('organization', newOrganization);

        toast.success(`Organization set to ${newOrganization}!`, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });

        return true;
    };

    return (
        <OrganizationContext.Provider value={{ organization, updateOrganization }}>
            {children}
        </OrganizationContext.Provider>
    );
}

export const useOrganization = () => useContext(OrganizationContext);
