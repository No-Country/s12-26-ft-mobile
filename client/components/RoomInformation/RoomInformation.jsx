import { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, Divider } from 'react-native-paper';
import normalize from 'react-native-normalize';
import { cardSelectedStore, dataSelectedStore } from '../../store';
import { useFetch } from '../../hooks';

import {
  AntDesign,
  MaterialIcons,
  Feather,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

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
    restrictions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    restrictionsText: {
      fontSize: 16,
      fontWeight: 800,
      marginTop: 10,
    },
  });

  const { fetchData } = useFetch();

  const [roomData, setRoomData] = useState();

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
  }, [item?.roomId]);

  // console.log(roomData);

  const item = dataSelectedStore((state) => state?.selectedData);

  const checkIcon = <AntDesign name='check' size={24} color='green' />;
  const negativeIcon = <Feather name='x' size={24} color='red' />;

  const petIcon = <MaterialIcons name='pets' size={24} color='gray' />;
  const smokeIcon = (
    <MaterialCommunityIcons name='cigar' size={24} color='gray' />
  );

  const wifi = <MaterialIcons name='wifi' size={24} color='black' />;

  const showServices = () => {
    if (roomData) {
      const serviceElements = [];

      for (let i = 0; i < roomData?.services.length; i++) {
        const e = roomData?.services[i];

        serviceElements.push(
          <Text key={i} style={{ fontSize: 16, fontWeight: 700 }}>
            {e.name}
          </Text>
        );
      }

      return serviceElements;
    }
  };

  const setIsSelected = cardSelectedStore((state) => state.setIsSelected);
  const isSelected = cardSelectedStore((state) => state.isSelected);
  const setIsSelectedHome = cardSelectedStore(
    (state) => state.setIsSelectedHome
  );
  const isSelectedHome = cardSelectedStore((state) => state.isSelectedHome);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FCF8FD' }}>
      <ScrollView>
        <View style={{ flex: 1, marginTop: 30 }}>
          <View style={styles.imageContainer}>
            <AntDesign
              name='arrowleft'
              size={30}
              color='#4754BA'
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
            <Image source={{ uri: roomData?.image }} style={styles.image} />
          </View>

          <View style={{ marginHorizontal: 40 }}>
            <View style={{ marginVertical: 10 }}>
              <Text style={{ color: '#1B1B1F', fontWeight: 700, fontSize: 16 }}>
                {roomData?.title}
              </Text>
              <Text>Habitacion de {roomData?.sizeM2} m²</Text>
            </View>

            <View style={{ marginVertical: 10 }}>
              <Text style={{ color: '#1B1B1F', fontWeight: 700, fontSize: 16 }}>
                {roomData?.city}
              </Text>
              <Text>{roomData?.room_type === 1 ? 'Apartamento' : 'Casa'}</Text>
            </View>

            <Text
              style={{
                color: '#1B1B1F',
                fontWeight: 700,
                marginVertical: 10,
                fontSize: 16,
              }}
            >
              Servicios Incluidos
            </Text>

            <View>{showServices()}</View>

            <Text
              style={{
                color: '#1B1B1F',
                fontWeight: 700,
                marginVertical: 10,
                fontSize: 16,
                marginTop: 26,
              }}
            >
              Restricciones
            </Text>

            <View>
              <View style={styles.restrictions}>
                <Text style={styles.restrictionsText}>{petIcon} Mascotas</Text>
                {roomData?.isPet ? checkIcon : negativeIcon}
              </View>

              <View style={styles.restrictions}>
                <Text style={styles.restrictionsText}>
                  {smokeIcon} Fumadores
                </Text>
                {roomData?.isSmokers ? checkIcon : negativeIcon}
              </View>
            </View>
          </View>

          <Divider style={{ marginTop: 20 }} />

          <View
            style={{
              flexDirection: 'row',
              marginVertical: 10,
              paddingVertical: 16,
              // position: 'absolute',
              bottom: 0,
              width: '100%',
              backgroundColor: 'white',
            }}
          >
            <View style={{ flex: 1, marginLeft: 50 }}>
              <Text style={{ color: '#1B1B1F', fontWeight: 800, fontSize: 18 }}>
                {roomData?.monthPrice} USD
              </Text>
              <Text>al mes</Text>
            </View>

            <View style={{ flex: 1, marginRight: 30 }}>
              <Button
                mode='contained'
                icon={() => (
                  <MaterialIcons
                    name='person-add-alt'
                    size={24}
                    color='white'
                  />
                )}
                buttonColor='#4754BA'
                style={styles.button}
              >
                <Text style={{ color: 'white' }}>Contactar</Text>
              </Button>
            </View>
          </View>
        </View>
        <StatusBar style='auto' />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RoomInformation;
