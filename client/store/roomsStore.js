import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const roomsStore = create(
  persist(
    (set, get) => ({
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
    }),
    {
      name: 'roomsInfo-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default roomsStore;
