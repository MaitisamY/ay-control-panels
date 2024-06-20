import { create } from 'zustand';

const useResponsiveSidebarStore = create((set) => ({
    isSidebarOpen: false,
    onToggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));

export default useResponsiveSidebarStore;