import { createContext, useContext, useState, useEffect } from 'react';

const OrganizationContext = createContext();

export const OrganizationProvider = ({ children }) => {
    const [organization, setOrganization] = useState(localStorage.getItem('organization') || '@organization');

    useEffect(() => {
        const storedOrganization = localStorage.getItem('organization');
        if (storedOrganization) {
            setOrganization(JSON.parse(storedOrganization));
        }
    }, []);

    const updateOrganization = (newOrganization) => {
        setOrganization(newOrganization);
        localStorage.setItem('organization', newOrganization);
    };

    return (
        <OrganizationContext.Provider value={{ organization, updateOrganization }}>
            {children}
        </OrganizationContext.Provider>
    );
}

export const useOrganization = () => useContext(OrganizationContext)