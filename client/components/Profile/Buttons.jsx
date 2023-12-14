import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';

const Buttons = () => {
  const styles = StyleSheet.create({
    buttons: {
      flexDirection: 'row',
      marginTop: 20,
      marginBottom: 20,
    },
    buttonPublicaciones: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#4754BA',
      marginHorizontal: 10,
    },
    buttonPublicar: {
      flex: 1,
      marginHorizontal: 10
    },
  });

  return (
    <View style={styles.buttons}>
      <Button
        mode='contained'
        buttonColor='white'
        textColor='#6558F5'
        style={styles.buttonPublicaciones}
        onPress={() => alert('Press')}
      >
        <Text variant='titleMedium' style={{ color: '#4754BA', backgroundColor: 'blue', flex: 1, width: '100%' }}>
          Mis Publicaciones
        </Text>
      </Button>
      <Button
        mode='contained'
        buttonColor='#4754BA'
        style={styles.buttonPublicar}
      >
        <Text variant='titleMedium' style={{ fontWeight: 'bold', color: 'white' }}>
          Publicar
        </Text>
      </Button>
    </View>
  );
};

export default Buttons;
