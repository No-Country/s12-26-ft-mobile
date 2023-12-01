import { TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '../../styles/MapButton.styles';

const MapButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <MaterialIcons name='map' size={30} color='#fff' />
      </TouchableOpacity>
    </View>
  );
};

export default MapButton;
