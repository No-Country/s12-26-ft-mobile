import { create } from 'zustand';

const roomsStore = create((set) => ({
  rooms: [],
  isLoading: false,
  addRooms: (rooms) => {
    set({ rooms: rooms });
  },
  removeRoomsInfo: () => {
    set({ rooms: [] });
  },
  setIsLoading: (isLoading) => {
    set({ isLoading });
  },
}));

export default roomsStore;
