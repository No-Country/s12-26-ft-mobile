import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

const EditProfileButton = () => {

  const styles = StyleSheet.create({
    button: {
      width: '80%',
      height: 45
    },
    text: {
      flex: 1,
      alignSelf: 'center',
      color: 'white',
      fontSize: 16
    }
  })

  return (
    <View style={{ alignItems: 'center', height: '100%', paddingTop: '20%'}}>
      <Button
        mode='contained'
        icon={() => <MaterialIcons name="edit" size={20} color={'white'} />}
        buttonColor='#4754BA'
        style={styles.button}
      >
        <Text variant='titleLarge' style={styles.text}>
          Editar Perfil
        </Text>
      </Button>
    </View>
  );
};

export default EditProfileButton;
