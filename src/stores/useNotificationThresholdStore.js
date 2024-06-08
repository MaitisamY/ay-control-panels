import { create } from 'zustand';
import { toast } from 'react-toastify';
import { addStorageEventListener } from '../utils/eventListeners.js';

const useNotificationThresholdStore = create((set) => {
    const initialThreshold = parseInt(localStorage.getItem('threshold')) || 10;

    addStorageEventListener('threshold', (newValue) => {
        set({ threshold: parseInt(newValue) });
    });

    return {
        threshold: initialThreshold,
        setThreshold: (threshold) => {
            set({ threshold });
            localStorage.setItem('threshold', parseInt(threshold));

            toast.success(`Threshold set to ${threshold}!`, {
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

export default useNotificationThresholdStore;
