import { StatusBar } from 'expo-status-bar';
import { View, Text, SafeAreaView, FlatList, ScrollView } from 'react-native';
import { Card, SearchBar } from '../../components';
import { styles } from './styles/Home.styles';
import { PLACES } from './fakeData';
import { MapButton } from './components';
import Header from '../../components/Profile/Header';
import { useFetch } from '../../hooks';
import { useEffect } from 'react';
import { roomsStore } from '../../store';

export default function Home() {
  const { fetchData } = useFetch();
  const rooms = roomsStore((state) => state.rooms);
  const addRooms = roomsStore((state) => state.addRooms);

  const getData = async () => {
    const response = await fetchData('getRoom');
    addRooms(response);
  };

  useEffect(() => {
    if (rooms?.length === 0) getData();
  }, [rooms]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Header />
        <SearchBar />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.subTitle}>Publicadas recientemente</Text>
          {rooms?.length > 0 ? (
            <>
              {PLACES?.map((item) => (
                <View style={styles.cardWrapper} key={item?.id}>
                  <Card
                    location={item.location}
                    description={item.description}
                    imageUrl={item.image}
                    price={item.price}
                    dimensions={item.dimensions}
                    instalment={item.instalment}
                  />
                </View>
              ))}
            </>
          ) : (
            <Text>No hay habitaciones para mostrar</Text>
          )}
        </ScrollView>
        <MapButton />
        <StatusBar style='auto' />
      </View>
    </SafeAreaView>
  );
}
