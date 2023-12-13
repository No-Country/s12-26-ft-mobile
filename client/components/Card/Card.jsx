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
        <Text>{location} &#183; </Text>
        <Text>{description}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text>{`$${price} USD / `}</Text>
        <Text>{instalment} &#183; </Text>
        <Text>{dimensions}</Text>
      </View>
    </View>
  );
};

export default Card;
