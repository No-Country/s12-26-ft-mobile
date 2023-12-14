import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const UserInfo = ({ nombre, edad, biografia, presupuesto, busco, zonasBuscadas }) => {
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
      <Text style={styles.informationName}>{nombre}</Text>
      <Text style={styles.information}>Edad: {edad}</Text>
      <Text style={styles.information}>Biografia: {biografia}</Text>
      <Text style={styles.information}>Presupuesto: {presupuesto}</Text>
      <Text style={styles.information}>Busco: {busco}</Text>
      <Text style={styles.information}>Zonas Buscadas: {zonasBuscadas}</Text>
    </View>
  );
};

export default UserInfo;
