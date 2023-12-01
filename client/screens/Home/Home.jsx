import { StatusBar } from 'expo-status-bar';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import { Card, SearchBar } from '../../components';
import { styles } from './styles/Home.styles';
import { PLACES } from './fakeData';
import { MapButton } from './components';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Encuentra tu lugar ideal</Text>
        <SearchBar />
        <Text style={styles.subTitle}>Publicadas recientemente</Text>
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
        <MapButton />
        <StatusBar style='auto' />
      </View>
    </SafeAreaView>
  );
}
