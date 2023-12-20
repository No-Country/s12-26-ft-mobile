const roomsAdapter = (rooms) => {
  return rooms?.map((room) => {
    return {
      roomId: room?.id,
      image: room?.image,
      title: room?.title,
      city: room?.city,
      district: room?.district,
      province: room?.province,
      monthPrice: room?.monthPrice,
      sizeM2: room?.sizeM2,
      isPetFriendly: room?.isPet,
      isSmokerFriendly: room?.isSmokers,
      room: room?.room,
    };
  });
};

export default roomsAdapter;
