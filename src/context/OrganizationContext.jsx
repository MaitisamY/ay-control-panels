import { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const OrganizationContext = createContext();

export const OrganizationProvider = ({ children }) => {
    const [organization, setOrganization] = useState(localStorage.getItem('organization') || '@organization');

    useEffect(() => {
        const storedOrganization = localStorage.getItem('organization');
        if (storedOrganization) {
            setOrganization(storedOrganization);
        }
    }, []);

    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === 'organization') {
                setOrganization(event.newValue);
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const updateOrganization = (newOrganization) => {
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
    };

    return (
        <OrganizationContext.Provider value={{ organization, updateOrganization }}>
            {children}
        </OrganizationContext.Provider>
    );
}

export const useOrganization = () => useContext(OrganizationContext);
