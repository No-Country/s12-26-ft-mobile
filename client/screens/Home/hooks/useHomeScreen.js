import { useEffect, useState } from 'react';
import roomsAdapter from '../../../adapters/roomsAdapters';
import { useFetch } from '../../../hooks';
import { favoritesStore, roomsStore, userStore } from '../../../store';
import FavoritesRoomsAdapter from '../../../adapters/favoritesRoomsAdapter';

const useHomeScreen = () => {
  const { fetchData } = useFetch();
  const addRooms = roomsStore((state) => state.addRooms);
  const rooms = roomsStore((state) => state.rooms);
  const favoritesRooms = favoritesStore((state) => state.favoritesRooms);
  const addFavoritesRooms = favoritesStore((state) => state.addFavoritesRooms);
  const user = userStore((state) => state.user);
  const [showSpinner, setShowSpinner] = useState(false);

  const getData = async () => {
    setShowSpinner(true);
    const response = await fetchData('getRoom');
    addRooms(roomsAdapter(response));
    setShowSpinner(false);
  };

  useEffect(() => {
    if (rooms?.length === 0) getData();
  }, [rooms]);

  const deleteFavorite = async (id) => {
    await fetchData('deleteFavoriteById', 'POST', {
      id: id,
    });
  };

  async function handlePress(roomId) {
    const roomExist = favoritesRooms?.find((item) => item?.roomId === roomId);
    if (roomExist) {
      const favoritesFiltered = favoritesRooms.filter(
        (item) => item?.roomId !== roomExist.roomId
      );

      await deleteFavorite(roomExist?.id);
      addFavoritesRooms(favoritesFiltered);
    } else {
      const response = await fetchData('insertFavorite', 'POST', {
        user: user?.userId,
        room: roomId,
      });

      if (response.Status === 'Success') {
        const responseFavorites = await fetchData('getFavoriteByUser', 'POST', {
          user: user?.userId,
        });
        addFavoritesRooms(FavoritesRoomsAdapter(responseFavorites));
      }
    }
  }

  return {
    handlePress,
    showSpinner,
  };
};

export default useHomeScreen;
