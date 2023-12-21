import { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import { routes as navbarRoutes } from '../../utils/routesUtils';
import { View, StyleSheet } from 'react-native';
import { FavoritesScreen, Home } from '../../screens';
import Profile from '../Profile';
import NewRoom from '../Profile/NewRoom';
import RoomInformation from '../RoomInformation';
import { newRoomStore, cardSelectedStore } from '../../store';

const Navbar = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState(navbarRoutes);

  const selectedComponent = newRoomStore((state) => state.selectedComponent);
  const isSelectedHome = cardSelectedStore((state) => state.isSelectedHome);
  const isSelected = cardSelectedStore((state) => state.isSelected);

  const Buscar = () => (isSelectedHome ? <Home /> : <RoomInformation />);

  const Guardados = () =>
    isSelected ? <FavoritesScreen /> : <RoomInformation />;

  const Perfil = () =>
    selectedComponent === 'profile' ? <Profile /> : <NewRoom />;

  const renderScene = BottomNavigation.SceneMap({
    buscar: Buscar,
    guardados: Guardados,
    perfil: Perfil,
    // roomInformation: RoomInformation,
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    barStyle: {
      backgroundColor: '#F3EDF7',
    },
  });

  return (
    <View style={styles.container}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        labeled={false}
        barStyle={styles.barStyle}
        theme={{ colors: { secondaryContainer: '#FFD9DD' } }}
      />
    </View>
  );
};

export default Navbar;
