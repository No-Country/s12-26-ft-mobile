import React, { useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';
import normalize from 'react-native-normalize';
import { cardSelectedStore, dataSelectedStore } from '../../store';
import { useFetch } from '../../hooks'

import { AntDesign, MaterialIcons } from '@expo/vector-icons';

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

  const { fetchData } = useFetch();

  const [roomData, setRoomData] = useState()

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const res = await fetchData('/getRoomById', 'POST', {
          id: item?.roomId,
        });
        setRoomData(res);
        console.log('Estado de la peticion: ' + res?.status);
      } catch (error) {
        console.error('Error en la petición:', error);
      }
    };
    
    fetchRoomData();
  }, [item?.roomId])
  
  
  // console.log(roomData.title);

  const item = dataSelectedStore((state) => state?.selectedData);


  const setIsSelected = cardSelectedStore((state) => state.setIsSelected);
  const isSelected = cardSelectedStore((state) => state.isSelected);
  const setIsSelectedHome = cardSelectedStore(
    (state) => state.setIsSelectedHome
  );
  const isSelectedHome = cardSelectedStore((state) => state.isSelectedHome);

  return (
    <SafeAreaView>
      <View style={styles.imageContainer}>
        <AntDesign
          name="arrowleft"
          size={30}
          color="#4754BA"
          style={styles.arrowIcon}
          onPress={() => {
            if (!isSelected) {
              setIsSelected(!isSelected);
            }
            if (!isSelectedHome) {
              setIsSelectedHome(!isSelectedHome);
            }
          }}
        />
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>

      {/* <Text>{item.city}</Text> */}

      <View style={{  marginHorizontal: 40 }}>
        <View style={{ marginVertical: 10 }}>
          <Text style={{ color: '#1B1B1F', fontWeight: 700 }}>{item.title}</Text>
          <Text style={{ color: '#696970' }}>Habitacion {item.room} de {item.sizeM2}m2</Text>
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text style={{ color: '#1B1B1F', fontWeight: 500 }}>{item.city}</Text>
          <Text style={{ color: '#696970' }}>ID: {item.id}</Text>
        </View>

        <Text style={{ color: '#1B1B1F', fontWeight: 700, marginVertical: 10, fontSize: 16 }}>Servicios Incluidos</Text>

      </View>

      <View style={{ flexDirection: 'row' }}>

        <View style={{ flex: 1, marginLeft: 50 }}>
          <Text style={{ color: '#1B1B1F', fontWeight: 500 }}>{item.monthPrice} USD</Text>
          <Text style={{ color: '#696970' }}>Al mes</Text>
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

      </View>
    </SafeAreaView>
  );
};

export default RoomInformation;
