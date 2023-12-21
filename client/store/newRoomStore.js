import { create } from 'zustand';

const newRoomStore = create((set) => ({
  selectedComponent: 'profile',
  setSelectedComponent: (component) => set({ selectedComponent: component }),
}));

export default newRoomStore;
