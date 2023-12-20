import { create } from 'zustand';

const favoritesStore = create((set) => ({
  favoritesRooms: [],
  isLoading: false,
  addFavoritesRooms: (rooms) => {
    set({ favoritesRooms: rooms });
  },
  removeFavoritesRoomsInfo: () => {
    set({ favoritesRooms: [] });
  },
  setIsLoading: (isLoading) => {
    set({ isLoading });
  },
}));

export default favoritesStore;
