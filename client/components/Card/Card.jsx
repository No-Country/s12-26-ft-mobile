import { View, Text, Image } from 'react-native';
import { styles } from './styles/Card.styles';

const Card = ({
  imageUrl,
  location,
  description,
  price,
  dimensions,
  instalment,
}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.textLocation}>{location}</Text>
        <Text style={styles.textDescription}>{description}</Text>
        <View style={styles.textWrapper}>
          <Text style={styles.textDescription}>{`$${price} USD / `}</Text>
          <Text style={styles.textDescription}>{instalment} &#183; </Text>
          <Text style={styles.textDescription}>{dimensions}</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;
