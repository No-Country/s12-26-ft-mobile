import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Button, Text } from 'react-native-paper';
import newRoomStore from '../../store/newRoomStore';

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
      marginHorizontal: 10
    },
  });

  const setSelectedComponent = newRoomStore((state) => state.setSelectedComponent);

  const handlePublicarClick = () => {
    setSelectedComponent('newRoom');
  };

  return (
    <SafeAreaView>
    <View>
      <View style={styles.buttons}>

        <TouchableOpacity
          style={{ flex: 1 }}
        >
          <Button
            mode='contained'
            buttonColor='white'
            textColor='#6558F5'
            style={styles.buttonPublicaciones}
          >
            <Text style={{ color: '#4754BA', flex: 1, width: '100%', fontWeight: 700 }}>
              Mis Publicaciones
            </Text>
          </Button>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handlePublicarClick}
          style={{ flex: 1 }}
          >
          <Button
            mode='contained'
            buttonColor='#4754BA'
            style={styles.buttonPublicar}
          >
            <Text variant='titleMedium' style={{ fontWeight: 'bold', color: 'white' }}>
              Publicar
            </Text>
          </Button>
        </TouchableOpacity>

      </View>
    </View>
    </SafeAreaView>
  );
};

export default Buttons;
