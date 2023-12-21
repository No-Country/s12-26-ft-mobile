import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Card, SearchBar } from '../../components';
import { styles } from './styles/FavoritesScreen.styles';
import Header from '../../components/Profile/Header';
import { cardSelectedStore, favoritesStore } from '../../store';
import { useFetch } from '../../hooks';
import { useFavorites } from './hooks';

const FavoritesScreen = () => {
  const { isLoading } = useFetch();
  const { handlePress, showLoader } = useFavorites();
  const favoritesRooms = favoritesStore((state) => state.favoritesRooms);
  const setIsSelected = cardSelectedStore((state) => state.setIsSelected);
  const isSelected = cardSelectedStore((state) => state.isSelected);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading && showLoader ? (
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
            <Text style={styles.title}>Mis favoritos</Text>
            {favoritesRooms?.length > 0 ? (
              <>
                {favoritesRooms?.map((item) => (
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
                      handleChangeState={() => setIsSelected(!isSelected)}
                    />
                  </View>
                ))}
              </>
            ) : (
              <Text>No hay favoritos para mostrar</Text>
            )}
          </ScrollView>
        </View>
      )}
      <StatusBar style='auto' />
    </SafeAreaView>
  );
};

export default FavoritesScreen;
