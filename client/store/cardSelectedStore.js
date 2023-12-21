import { create } from 'zustand';

const cardSelectedStore = create((set) => ({
  selectedCard: null,
  setSelectedCard: (card) => set({ selectedCard: card, selectedComponent: 'roomInformation' }),
  selectedComponent: 'favoritesScreen',
  setSelectedComponent: (component) => set({ selectedComponent: component }),
}));

export default useCardSelectedStore;
