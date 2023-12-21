import { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { rootColors } from '../../constants';
import { styles } from './styles/SearchBar.styles';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setSearch}
        value={search}
        placeholder='Busca tu ciudad, zona, etc'
        placeholderTextColor={rootColors.textPrimary}
        keyboardType='web-search'
        style={styles.input}
      />
      <TouchableOpacity
        style={styles.filterIcon}
        onPress={() => navigate('FiltersScreen')}
      >
        <MaterialIcons name='filter-list-alt' size={26} color='#46464F' />
      </TouchableOpacity>
      <MaterialIcons
        name='search'
        size={26}
        color='#46464F'
        style={styles.searchIcon}
      />
    </View>
  );
};

export default SearchBar;
