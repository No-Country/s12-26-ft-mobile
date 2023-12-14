import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import Logo from '../../assets/logo.svg';
import Svg, { Path, G, Circle, Defs, Rect } from 'react-native-svg';
import { AppLogoWide } from '../Icons/IconsView';

const Header = () => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 10,
      paddingHorizontal: 16,
    },
    image: {
      width: 65,
      height: 65,
      marginLeft: 32,
    },
  });

  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 'auto' }}>
        {/* <Logo width="100%" height="100%" /> */}
        <AppLogoWide size={100} />
      </View>
      <View style={{ marginLeft: 'auto' }}>
        <Ionicons name='settings' size={32} color='#424F5B' />
      </View>
    </View>
  );
};

export default Header;
