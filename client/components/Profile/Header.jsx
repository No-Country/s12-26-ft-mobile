import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AppLogoWide } from '../Icons/IconsView';
import normalize from 'react-native-normalize';

const Header = ({ showBackIcon = false, showSettingsIcon = true }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {showBackIcon && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name='arrow-back' size={32} color='#8390FA' />
        </TouchableOpacity>
      )}
      <View style={{ marginLeft: 'auto' }}>
        <AppLogoWide size={170} />
      </View>
      {showSettingsIcon ? (
        <TouchableOpacity
          style={{ marginLeft: 'auto' }}
          onPress={() => navigation.navigate('SettingsScreen')}
        >
          <Ionicons name='settings' size={30} color='#424F5B' />
        </TouchableOpacity>
      ) : (
        <View style={{ marginLeft: 'auto' }} />
      )}
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
