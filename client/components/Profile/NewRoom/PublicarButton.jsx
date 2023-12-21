import React from 'react'
import { styles } from './NewRoom.styles'
import { View } from 'react-native'
import { useFetch } from '../../../hooks';
import { Button } from 'react-native-paper'

import { userStore } from '../../../store';
import { useNavigation } from '@react-navigation/native';

const PublicarButton = ({ data }) => {
  const { fetchData, isLoading } = useFetch();
  const userData = userStore((state) => state?.user);

  const navigation = useNavigation();

  const { titulo, descripcion, zona, tipoHabitacion, tipoPropiedad, renta, tamanio, servicios, linkImagen } = data

  const imagen = 'https://images.adsttc.com/media/images/6374/e5f6/bd52/ae40/da37/3477/newsletter/apartamento-pepyra-estudio-bra_1.jpg?1668605462'

  const makeCall = async () => {
    try {
      const res = await fetchData('/InsertRoom', 'POST', {
        "image": imagen,
        "title": titulo,
        "city": zona,
        "district": "distrito de la habitación",
        "province": "provincia de la habitación",
        "monthPrice": renta,
        "sizeM2": tamanio,
        "isPet": true,
        "isSmokers": false,
        "room": 1,
        "userId": userData?.userId,
        "serviceId": servicios
      });

     
      // navigation.navigate('RoomInformation', { roomId: 1 });

      console.log('Estado de la peticion: ' + res?.status);
    } catch (error) {
      console.error('Error en la petición:', error);
    }
  }

  return (
    <View style={styles.containerButtonPublicar}>
      <Button
        mode="contained"
        onPress={makeCall}
        style={styles.buttonPublicar}
      >
        {isLoading ? 'Cargando..' : 'Publicar'}
      </Button>
    </View>
  )
}

export default PublicarButton