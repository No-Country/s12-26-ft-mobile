import { create } from 'zustand';

const cardSelectedStore = create((set) => ({
  selectedCard: {},
  isSelected: false,
  setIsSelected: (isSelected) => set({ isSelected }),

  selectedCardHome: {},
  isSelectedHome: false,
  setIsSelectedHome: (isSelectedHome) => set({ isSelectedHome }),
  // setSelectedCard: (card) =>
  //   set({ selectedCard: card, selectedComponent: 'roomInformation' }),
  // selectedComponent: 'favoritesScreen',
  // setSelectedComponent: (component) => set({ selectedComponent: component }),
}));

export default cardSelectedStore;
