import { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import { routes as navbarRoutes } from '../../utils/routesUtils';
import { View, StyleSheet } from 'react-native';
import Profile from '../Profile';
import { FavoritesScreen, Home } from '../../screens';

const Navbar = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState(navbarRoutes);

  const Buscar = () => <Home />;

  const Guardados = () => <FavoritesScreen />;

  const Perfil = () => <Profile />;

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
