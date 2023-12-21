import React from 'react'
import { styles } from './NewRoom.styles'
import { View } from 'react-native'
import { useFetch } from '../../../hooks';
import { Button } from 'react-native-paper'

import { userStore } from '../../../store';

const PublicarButton = ({ data }) => {
  const { fetchData, isLoading } = useFetch();
  const userData = userStore((state) => state?.user);

  const { titulo, descripcion, zona, tipoHabitacion, tipoPropiedad, renta, tamanio, servicios, linkImagen } = data

  const makeCall = async () => {
    try {
      const res = await fetchData('/InsertRoom', 'POST', {
        "image": linkImagen,
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