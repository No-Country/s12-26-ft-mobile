import { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import { routes as navbarRoutes } from '../../utils/routesUtils';
import { View, StyleSheet } from 'react-native';
import { FavoritesScreen, Home } from '../../screens';
import Profile from '../Profile';
import NewRoom from '../Profile/NewRoom';
import newRoomStore from '../../store/newRoomStore';
import RoomInformation from '../RoomInformation';

const Navbar = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState(navbarRoutes);

  const selectedComponent = newRoomStore((state) => state.selectedComponent);

  const Buscar = () => <Home />;

  const Guardados = () => <FavoritesScreen />;
  // const Guardados = () => <RoomInformation />;

  const Perfil = () => (selectedComponent === 'profile' ? <Profile /> : <NewRoom />);

  const renderScene = BottomNavigation.SceneMap({
    buscar: Buscar,
    guardados: Guardados,
    perfil: Perfil,
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
