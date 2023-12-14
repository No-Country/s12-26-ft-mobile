import { TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from '../../styles/MapButton.styles';

const MapButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <MaterialCommunityIcons name='map-outline' size={28} color='#400013' />
      </TouchableOpacity>
    </View>
  );
};

export default MapButton;
