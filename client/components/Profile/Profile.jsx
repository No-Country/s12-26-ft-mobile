import React, { useState } from 'react';
import { View } from 'react-native';

import Buttons from './Buttons';
import EditProfileButton from './EditProfileButton';
import Header from './Header';
import UserInfo from './UserInfo';
import Title from './Title';

const Profile = () => {
  const [userData, setUserData] = useState({
    nombre: 'Ignacio López',
    edad: '31',
    biografia: 'Lorem Ipsum',
    presupuesto: 'Lorem Ipsum',
    busco: 'habitación individual',
    zonasBuscadas: ''
  });

  return (
    <View>
      <Header />
      <Title />
      <Buttons />
      <UserInfo {...userData} />
      <EditProfileButton />
    </View>
  );
};

export default Profile;
