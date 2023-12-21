import { View, Text, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '../../styles/PriceRange.styles';

const PriceRange = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subTitleContainer}>
        <MaterialIcons name='attach-money' size={28} color='#8390FA' />
        <Text style={styles.title}>{`Rango de precios (USD)`}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Mínimo'
          placeholderTextColor={'#46464F'}
          keyboardType='number-pad'
          style={styles.input}
        />
        <TextInput
          placeholder='Máximo'
          placeholderTextColor={'#46464F'}
          keyboardType='number-pad'
          style={styles.input}
        />
      </View>
      <View style={styles.separator} />
    </View>
  );
};

export default PriceRange;
