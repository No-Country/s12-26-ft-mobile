import React, { useEffect, useState } from 'react'
import { styles } from './NewRoom.styles'
import { View } from 'react-native'
import { useFetch } from '../../../hooks';
import { Button } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';

const PublicarButton = ({ data }) => {
  const { fetchData } = useFetch();
  const [userData, setUserData] = useState(null);
  const imagenPorDefecto = 'https://images.adsttc.com/media/images/6374/e5f6/bd52/ae40/da37/3477/newsletter/apartamento-pepyra-estudio-bra_1.jpg?1668605462'
  const resetedData = data

  const { titulo, descripcion, zona, tipoHabitacion, tipoPropiedad, renta, tamanio, servicios } = resetedData

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

  // console.log(userData.userId)

  const makeCall = async () => {
    const res = await fetchData('/InsertRoom', 'POST', {
      "image": imagenPorDefecto,
      "title": titulo,
      "city": zona,
      "district": "distrito de la habitación",
      "province": "provincia de la habitación",
      "monthPrice": renta,
      "sizeM2": tamanio,
      "isPet": true,
      "isSmokers": false,
      // "room": 1,
      "userId": userData.userId,
      "serviceId": servicios
    });

    console.log('Estado de la peticion: ' + res.status)
}
  
return (
  <View style={styles.containerButtonPublicar}>
    <Button
      mode="contained"
      onPress={makeCall}
      style={styles.buttonPublicar}
    >
      Publicar
    </Button>
  </View>
)
}

export default PublicarButton