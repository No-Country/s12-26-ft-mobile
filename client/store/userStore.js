import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const userStore = create(
  persist(
    (set, get) => ({
      user: {},
      isLoading: false,
      addUser: (data) => {
        set({ user: data });
      },
      removeUserInfo: () => {
        set({ user: {} });
      },
      setIsLoading: (isLoading) => {
        set({ isLoading });
      },
    }),
    {
      name: 'userInfo-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default userStore;
