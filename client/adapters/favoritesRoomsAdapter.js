const FavoritesRoomsAdapter = (rooms) => {
  return rooms?.map((item) => {
    return {
      id: item?.favoriteId,
      roomId: item?.room?.id,
      image: item?.room?.image,
      title: item?.room?.title,
      city: item?.room?.city,
      district: item?.room?.district,
      province: item?.room?.province,
      monthPrice: item?.room?.monthPrice,
      sizeM2: item?.room?.sizeM2,
      isPetFriendly: item?.room?.isPet,
      isSmokerFriendly: item?.room?.isSmokers,
      room: item?.room?.room_type,
    };
  });
};

export default FavoritesRoomsAdapter;
