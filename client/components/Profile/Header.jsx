import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppLogoWide } from '../Icons/IconsView';
import normalize from 'react-native-normalize';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 'auto' }}>
        <AppLogoWide size={170} />
      </View>
      <View style={{ marginLeft: 'auto' }}>
        <Ionicons name='settings' size={30} color='#424F5B' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: normalize(16, 'width'),
  },
});

export default Header;
