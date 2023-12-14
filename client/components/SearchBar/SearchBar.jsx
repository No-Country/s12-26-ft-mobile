import { useState } from 'react';
import { View, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { rootColors } from '../../constants';
import { styles } from './styles/SearchBar.styles';

const SearchBar = () => {
  const [search, setSearch] = useState('');

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
      <MaterialIcons
        name='filter-list-alt'
        size={24}
        color='black'
        style={styles.filterIcon}
      />
      <MaterialIcons
        name='search'
        size={24}
        color='black'
        style={styles.searchIcon}
      />
    </View>
  );
};

export default SearchBar;
