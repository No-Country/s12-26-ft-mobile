import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { Card, SearchBar } from '../../components';
import { styles } from './styles/Home.styles';
import { MapButton } from './components';
import Header from '../../components/Profile/Header';
import { useFetch } from '../../hooks';
import { roomsStore } from '../../store';
import { useHomeScreen } from './hooks';

export default function Home() {
  const { isLoading } = useFetch();
  const { handlePress, showSpinner } = useHomeScreen();
  const rooms = roomsStore((state) => state.rooms);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading && showSpinner ? (
        <ActivityIndicator
          size='large'
          color={'#789cc0'}
          style={{ alignSelf: 'center', flex: 1 }}
        />
      ) : (
        <View style={styles.wrapper}>
          <Header />
          <SearchBar />
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.subTitle}>Publicadas recientemente</Text>
            {rooms?.length > 0 ? (
              <>
                {rooms?.map((item) => (
                  <View style={styles.cardWrapper} key={item?.roomId}>
                    <Card
                      roomId={item?.roomId}
                      image={item?.image}
                      city={item?.city}
                      title={item?.title}
                      monthPrice={item?.monthPrice}
                      sizeM2={item?.sizeM2}
                      district={item?.district}
                      province={item?.province}
                      room={item?.room}
                      handlePress={handlePress}
                    />
                  </View>
                ))}
              </>
            ) : (
              <Text>No hay habitaciones para mostrar</Text>
            )}
          </ScrollView>
          <MapButton />
          <StatusBar style='light' />
        </View>
      )}
    </SafeAreaView>
  );
}
