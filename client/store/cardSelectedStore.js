import { create } from 'zustand';

const cardSelectedStore = create((set) => ({
  selectedCard: {},
  isSelected: true,
  setIsSelected: (isSelected) => set({ isSelected }),

  selectedCardHome: {},
  isSelectedHome: true,
  setIsSelectedHome: (isSelectedHome) => set({ isSelectedHome }),
}));

export default cardSelectedStore;
