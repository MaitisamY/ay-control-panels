import { create } from 'zustand';
import { toast } from 'react-toastify';

const useThemeStore = create((set) => ({
    theme: localStorage.getItem('theme') || 'default',
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
}));

export default useThemeStore;
