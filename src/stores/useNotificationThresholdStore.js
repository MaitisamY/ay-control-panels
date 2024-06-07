import { create } from 'zustand';
import { toast } from 'react-toastify';

const useNotificationThresholdStore = create((set) => ({
    threshold: parseInt(localStorage.getItem('threshold')) || 10,
    setThreshold: (threshold) => {
        set({ threshold }),
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
}));

export default useNotificationThresholdStore;