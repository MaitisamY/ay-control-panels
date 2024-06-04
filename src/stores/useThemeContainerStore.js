import { create } from 'zustand';

const useThemeContainerStore = create((set) => ({
    isOpen: false,
    toggleThemeContainer: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useThemeContainerStore;
