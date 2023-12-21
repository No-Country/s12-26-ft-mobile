import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Profile/Header';
import { ButtonsOptionsView } from './components';
import { styles } from './styles/SettingsScreen.styles';
import { userStore } from '../../store';

const SettingsScreen = () => {
  const { navigate } = useNavigation();
  const removeUserInfo = userStore((state) => state.removeUserInfo);

  function closeSession() {
    removeUserInfo();
    navigate('Login');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Header showBackIcon={true} showSettingsIcon={false} />
        <ButtonsOptionsView
          iconName='notifications-none'
          text='Notificaciones'
          isMaterialIcon={true}
        />
        <ButtonsOptionsView
          iconName='help-outline'
          text='Ayuda'
          isMaterialIcon={true}
        />
        <ButtonsOptionsView
          iconName='bug-outline'
          text='Notificar un error'
          isMaterialIcon={false}
        />
        <ButtonsOptionsView
          iconName='close'
          text='Eliminar cuenta'
          isMaterialIcon={true}
        />
        <TouchableOpacity style={styles.button} onPress={closeSession}>
          <Text style={styles.buttonText}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
