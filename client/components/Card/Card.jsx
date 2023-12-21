import { View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles/Card.styles';
import { useFavorites } from '../../screens/FavoritesScreen/hooks';
import { cardSelectedStore } from '../../store';

const Card = ({
  roomId,
  image,
  city,
  title,
  monthPrice,
  sizeM2,
  district,
  province,
  room,
  handlePress,
  handleChangeState,
}) => {
  const { isFavorite } = useFavorites();

  // const setIsSelected = cardSelectedStore((state) => state.setIsSelected);
  // const isSelected = cardSelectedStore((state) => state.isSelected);

  // const setIsSelectedHome = cardSelectedStore((state) => state.setIsSelectedHome);
  // const isSelectedHome = cardSelectedStore((state) => state.isSelectedHome);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleChangeState()}
      // onPress={() => alert('suuuu')}
    >
      <TouchableOpacity
        style={styles.heartButton}
        onPress={() => handlePress(roomId)}
      >
        {isFavorite(roomId) ? (
          <MaterialCommunityIcons name='heart' size={28} color='red' />
        ) : (
          <MaterialCommunityIcons
            name='cards-heart-outline'
            size={28}
            color='#fff'
          />
        )}
      </TouchableOpacity>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text
          style={styles.textLocation}
        >{`${city}, ${province}, ${district}`}</Text>
        <Text style={styles.textDescription}>{`${room} ${title}`}</Text>
        <View style={styles.textWrapper}>
          <Text style={styles.textDescription}>{`$${monthPrice} USD / `}</Text>
          <Text style={styles.textDescription}>mes &#183; </Text>
          <Text style={styles.textDescription}>{sizeM2} m²</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
