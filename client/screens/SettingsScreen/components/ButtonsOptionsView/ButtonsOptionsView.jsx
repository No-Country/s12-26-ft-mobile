import { TouchableOpacity, Text } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from '../../styles/ButtonsOptionsView.styles';

const ButtonsOptionsView = ({ iconName, text, isMaterialIcon = true }) => {
  return (
    <TouchableOpacity style={styles.button}>
      {isMaterialIcon ? (
        <MaterialIcons name={iconName} size={26} color='#8390FA' />
      ) : (
        <MaterialCommunityIcons name={iconName} size={26} color='#8390FA' />
      )}
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonsOptionsView;
