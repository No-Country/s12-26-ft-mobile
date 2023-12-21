import { useEffect, useState } from 'react';
import { useFetch } from '../../../hooks';
import { favoritesStore, userStore } from '../../../store';
import FavoritesRoomsAdapter from '../../../adapters/favoritesRoomsAdapter';

const useFavorites = () => {
  const { fetchData } = useFetch();
  const favoritesRooms = favoritesStore((state) => state.favoritesRooms);
  const addFavoritesRooms = favoritesStore((state) => state.addFavoritesRooms);
  const user = userStore((state) => state.user);
  const [showLoader, setShowLoader] = useState(false);

  const getData = async () => {
    setShowLoader(true);
    const response = await fetchData('getFavoriteByUser', 'POST', {
      user: user?.userId,
    });
    addFavoritesRooms(FavoritesRoomsAdapter(response));
    setShowLoader(false);
  };

  const deleteFavorite = async (id) => {
    await fetchData('deleteFavoriteById', 'POST', {
      id: id,
    });
  };

  useEffect(() => {
    if (favoritesRooms?.length === 0) getData();
  }, []);

  async function handlePress(roomId) {
    const roomExist = favoritesRooms?.find((item) => item?.roomId === roomId);
    if (roomExist) {
      const favoritesFiltered = favoritesRooms.filter(
        (item) => item?.roomId !== roomExist.roomId
      );

      await deleteFavorite(roomExist?.id);
      addFavoritesRooms(favoritesFiltered);
    }
  }

  const isFavorite = (roomId) => {
    const roomExist = favoritesRooms?.find((item) => item?.roomId === roomId);
    return roomExist ? true : false;
  };

  return {
    handlePress,
    showLoader,
    isFavorite,
  };
};

export default useFavorites;
