import React from 'react';
import { View } from 'react-native';

import Buttons from './Buttons';
import EditProfileButton from './EditProfileButton';
import Header from './Header';
import UserInfo from './UserInfo';
import Title from './Title';

import { userStore } from '../../store';

const Profile = () => {
  const userData = userStore((state) => state?.user);

  return (
    <View style={{marginTop: 21}}>
      <Header />
      <Title />
      <Buttons />
      <UserInfo {...userData} />
      <EditProfileButton />
    </View>
  );
};

export default Profile;
