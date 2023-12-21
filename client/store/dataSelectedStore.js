import { create } from 'zustand';

const dataSelectedStore = create((set) => ({
  selectedData: null,
  setSelectedData: (data) => set({ selectedData: data }),
}));

export default dataSelectedStore;
