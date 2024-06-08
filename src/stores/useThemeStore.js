import { create } from 'zustand';
import { toast } from 'react-toastify';
import { addStorageEventListener } from '../utils/eventListeners.js';

const useThemeStore = create((set) => {
    const initialTheme = localStorage.getItem('theme') || 'default';

    addStorageEventListener('theme', (newValue) => {
        set({ theme: newValue });
    });

    return {
        theme: initialTheme,
        setTheme: (theme) => {
            set({ theme });
            localStorage.setItem('theme', theme);

            toast.success(`Theme turned to ${theme.charAt(0).toUpperCase() + theme.slice(1)}!`, {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        },
    };
});

export default useThemeStore;
