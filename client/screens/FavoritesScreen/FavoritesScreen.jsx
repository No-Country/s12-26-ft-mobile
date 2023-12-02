import { View, Text, SafeAreaView, FlatList } from 'react-native';
import { Card, SearchBar } from '../../components';
import { PLACES } from '../Home/fakeData';
import { styles } from './styles/FavoritesScreen.styles';

const FavoritesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <SearchBar />
        <Text style={styles.title}>Mis favoritos</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={PLACES}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.cardWrapper}>
              <Card
                location={item.location}
                description={item.description}
                imageUrl={item.image}
                price={item.price}
                dimensions={item.dimensions}
                instalment={item.instalment}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default FavoritesScreen;
