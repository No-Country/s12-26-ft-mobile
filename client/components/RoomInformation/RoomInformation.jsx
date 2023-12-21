import React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import normalize from 'react-native-normalize';
import { cardSelectedStore } from '../../store';

const RoomInformation = () => {
  const styles = StyleSheet.create({
    imageContainer: {
      resizeMode: 'cover',
      position: 'relative',
      width: '100%',
      height: normalize(250),
      marginTop: 30,
      overflow: 'hidden',
    },
    image: {
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      marginBottom: normalize(16, 'height'),
    },
    arrowIcon: {
      position: 'absolute',
      top: 20,
      left: 20,
      zIndex: 1,
    },
  });

  const setIsSelected = cardSelectedStore((state) => state.setIsSelected);
  const isSelected = cardSelectedStore((state) => state.isSelected);
  const setIsSelectedHome = cardSelectedStore(
    (state) => state.setIsSelectedHome
  );
  const isSelectedHome = cardSelectedStore((state) => state.isSelectedHome);

  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          if (!isSelected) {
            setIsSelected(!isSelected);
          }
          if (!isSelectedHome) {
            setIsSelectedHome(!isSelectedHome);
          }
        }}
        style={{ marginTop: 70 }}
      >
        <Text> holaaa </Text>
      </TouchableOpacity>
      {/* <View style={styles.imageContainer}>
        <AntDesign
          name="arrowleft"
          size={30}
          color="#4754BA"
          style={styles.arrowIcon}
          onPress={hideModal}
        />
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>

      <View style={{ flex: 3, marginHorizontal: 40 }}>
        <View style={{ marginVertical: 10 }}>
          <Text style={{ color: '#1B1B1F', fontWeight: 500 }}>{item.description}</Text>
          <Text style={{ color: '#696970' }}>{item.dimensions}</Text>
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text style={{ color: '#1B1B1F', fontWeight: 500 }}>Zona</Text>
          <Text style={{ color: '#696970' }}>ID: {item.id}</Text>
        </View>

        <Text style={{ color: '#1B1B1F', fontWeight: 500, marginVertical: 10 }}>Servicios Incluidos</Text>

        <Text>Location: {item.location}</Text>
        <Text>Price: {item.price}</Text>
        <Text>Instalment: {item.instalment}</Text>
      </View>

      <View style={{ flexDirection: 'row' }}>

        <View style={{ flex: 1, marginLeft: 50 }}>
          <Text style={{ color: '#1B1B1F', fontWeight: 500 }}>{item.price} USD</Text>
          <Text style={{ color: '#696970' }}>{item.instalment}</Text>
        </View>

        <View style={{ marginBottom: 30, flex: 1, marginRight: 30 }}>
          <Button
            mode='contained'
            icon={() => <MaterialIcons name="person-add-alt" size={24} color="white" />}
            buttonColor='#4754BA'
            style={styles.button}
          >
            <Text variant='titleLarge' >
              Contactar
            </Text>
          </Button>
        </View>

      </View> */}
    </SafeAreaView>
  );
};

export default RoomInformation;
