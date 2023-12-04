import React, { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { routes as navbarRoutes } from '../../utils/routesUtils';
import { View, StyleSheet } from 'react-native';

const Navbar = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState(navbarRoutes);

  const Buscar = () => <Text>Buscar</Text>;

  const Guardados = () => <Text>guardados</Text>;

  const Perfil = () => <Text>Perfil</Text>;

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
      backgroundColor: 'white',
      borderTop: 'lightGray 3px solid'
    }
  });

  return (
    <View style={styles.container}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        labeled={false}
        barStyle={{ backgroundColor: 'white', borderTop: 'lightGray 3px solid'}}
        theme={{colors: {secondaryContainer: 'white'}}}
      />
    </View>
  );
};

export default Navbar;
