import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import Buttons from './Buttons';
import EditProfileButton from './EditProfileButton';
import Header from './Header';
import UserInfo from './UserInfo';
import Title from './Title';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedUserData = await AsyncStorage.getItem('userData');

        if (storedUserData) {
          const parsedUserData = JSON.parse(storedUserData);
          setUserData(parsedUserData);
          console.log(parsedUserData)
        }
      } catch (error) {
        console.error('Error al obtener datos de AsyncStorage:', error);
      }
    };

    fetchUserData();
  }, []);

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
