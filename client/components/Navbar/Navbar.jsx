import React, { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { routes as navbarRoutes } from '../../utils/routesUtils';
import { View, StyleSheet } from 'react-native';

import Profile from '../Profile';
import Home from '../../screens/Home/Home';

const Navbar = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState(navbarRoutes);

  const Buscar = () => <Home />;

  const Guardados = () => <Text>guardados</Text>;

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
