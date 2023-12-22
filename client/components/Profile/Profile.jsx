import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Buttons from './Buttons';
import EditProfileButton from './EditProfileButton';
import Header from './Header';
import UserInfo from './UserInfo';
import Title from './Title';

import { userStore } from '../../store';

const Profile = () => {
  const userData = userStore((state) => state?.user);

  return (
    <SafeAreaView style={{ marginTop: 21, backgroundColor: '#FCF8FD' }}>
      <Header />
      <Title />
      <Buttons />
      <UserInfo {...userData} />
      <EditProfileButton />
      <StatusBar style='auto' />
    </SafeAreaView>
  );
};

export default Profile;
