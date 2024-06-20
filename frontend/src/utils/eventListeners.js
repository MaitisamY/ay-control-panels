import { useState, useEffect } from 'react';

export const useWindowActive = (delay = 3000) => {
    const [isActive, setIsActive] = useState(!document.hidden);

    useEffect(() => {
        let timeoutId;

        const handleVisibilityChange = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setIsActive(!document.hidden);
            }, delay);
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            clearTimeout(timeoutId);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [delay]);

    return isActive;
};

// Adding an event listener for storage changes
export const addStorageEventListener = (key, callback) => {
    window.addEventListener('storage', (event) => {
        if (event.key === key) {
            callback(event.newValue);
        }
    });
};