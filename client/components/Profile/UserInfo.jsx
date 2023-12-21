import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const UserInfo = ({ userName, userLocation}) => {
  const styles = StyleSheet.create({
    container: {
      marginLeft: 30,
    },
    informationName: {
      marginBottom: 30,
      color: '#424F5B',
      fontSize: 20,
      fontWeight: 'bold'
    },
    information: {
      marginBottom: 28,
      color: '#424F5B',
      fontSize: 17
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.informationName}>{userName}</Text>
      <Text style={styles.information}>Edad: 31</Text>
      <Text style={styles.information}>Biografia:</Text>
      {/* <Text style={styles.information}>Edad: {edad}</Text> */}
      {/* <Text style={styles.information}>Biografia: {biografia}</Text> */}
    </View>
  );
};

export default UserInfo;
