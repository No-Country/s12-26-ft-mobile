import React, { useState } from 'react'
import { View, ScrollView, TouchableOpacity } from 'react-native'
import { Text, TextInput, Divider, Chip } from 'react-native-paper'
import Header from '../Header'
import { Octicons, AntDesign } from '@expo/vector-icons';
import { styles } from './NewRoom.styles'
import newRoomStore from '../../../store/newRoomStore';
import PublicarButton from './PublicarButton';

const NewRoom = () => {

  const checkIcon = <AntDesign name="check" size={24} color="black" />
  const arrowLeftIcon = <AntDesign name="arrowleft" size={24}
    color="#4754BA" />

  const setSelectedComponent = newRoomStore((state) => state.setSelectedComponent);

  let [data, setData] = useState({
    linkImagen: '',
    titulo: '',
    descripcion: '',
    zona: '',
    tipoHabitacion: [],
    tipoPropiedad: [],
    renta: undefined,
    tamanio: undefined,
    servicios: []
  })

  const selectedChip = (tipo, elemento) => {
    setData((prevData) => ({
      ...prevData,
      [tipo]: prevData[tipo].includes(elemento)
        ? prevData[tipo].filter((item) => item !== elemento)
        : [...prevData[tipo], elemento],
    }));
  };

  const setInformation = (name, value) => {
    setData({
      ...data,
      [name]: value
    })
  }

  const handleArrowLeftClick = () => {
    setSelectedComponent('profile');
  };

  return (
    <ScrollView>
      <View style={{ marginTop: 30 }}>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={handleArrowLeftClick}>
            <View style={{ marginTop: 30, marginLeft: 16 }}>
              {arrowLeftIcon}
            </View>
          </TouchableOpacity>
          <View style={{ flex: 3 }}>
            <Header />
          </View>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontWeight: 700, fontSize: 16, marginTop: 10 }}>Describe tu espacio</Text>
        </View>

        <View>
          <TextInput
            style={styles.textInput}
            label='Titulo'
            onChangeText={(value) => setInformation('titulo', value)}
          />
          <TextInput
            style={styles.textInput}
            label='Descripción'
            onChangeText={(value) => setInformation('descripcion', value)}
          />
          <TextInput
            style={styles.textInput}
            label='Zona'
            onChangeText={(value) => setInformation('zona', value)}
          />
        </View>

        <Divider style={styles.divider} />

        <View>
          <View style={styles.container}>
            <Octicons
              name="home"
              size={20}
              color="black" />
            <Text style={styles.text}>Tipo de habitación</Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.chipContainer}>
              <Chip
                style={data.tipoHabitacion.includes('individual') ? styles.selectedChip : styles.chip}
                icon={data.tipoHabitacion.includes('individual') ? () => checkIcon : null}
                onPress={() => selectedChip('tipoHabitacion', 'individual')}>Individual</Chip>
              <Chip
                style={data.tipoHabitacion.includes('compartida') ? styles.selectedChip : styles.chip}
                icon={data.tipoHabitacion.includes('compartida') ? () => checkIcon : null}
                onPress={() => selectedChip('tipoHabitacion', 'compartida')}>Compartida</Chip>
              <Chip
                style={data.tipoHabitacion.includes('alojamiento entero') ? styles.selectedChip : styles.chip}
                icon={data.tipoHabitacion.includes('alojamiento entero') ? () => checkIcon : null}
                onPress={() => selectedChip('tipoHabitacion', 'alojamiento entero')}>Alojamiento entero</Chip>
            </View>
          </ScrollView>
        </View>

        <Divider style={styles.divider} />

        <View>
          <View style={styles.container}>
            <Octicons name="home" size={20} color="black" />
            <Text style={styles.text}>Tipo de propiedad</Text>
          </View>
          <View style={styles.chipContainer}>
            <Chip
              style={data.tipoPropiedad.includes('casa') ? styles.selectedChip : styles.chip}
              icon={data.tipoPropiedad.includes('casa') ? () => checkIcon : null}
              onPress={() => selectedChip('tipoPropiedad', 'casa')}
            >Casa</Chip>
            <Chip
              style={data.tipoPropiedad.includes('departamento') ? styles.selectedChip : styles.chip}
              icon={data.tipoPropiedad.includes('departamento') ? () => checkIcon : null}
              onPress={() => selectedChip('tipoPropiedad', 'departamento')}>Departamento</Chip>
          </View>
        </View>

        <Divider style={styles.divider} />

        <View>
          <View style={styles.container}>
            <Octicons name="home" size={20} color="black" />
            <Text style={styles.text}>Renta mensual y tamaño</Text>
          </View>
          <View style={styles.containerInputs}>
            <TextInput
              style={styles.inputs}
              label='Precio'
              onChangeText={(value) => setInformation('renta', value)}
            />
            <TextInput
              style={styles.inputs}
              label='Tamaño (m2)'
              onChangeText={(value) => setInformation('tamanio', value)}
            />
          </View>
        </View>

        <Divider style={styles.divider} />

        <View>
          <View style={styles.container}>
            <Octicons name="home" size={20} color="black" />
            <Text style={styles.text}>Servicios</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.chipContainer}>
              <Chip
                style={data.servicios.includes(1) ? styles.selectedChip : styles.chip}
                icon={data.servicios.includes(1) ? () => checkIcon : null}
                onPress={() => selectedChip('servicios', 1)}>Wifi</Chip>
              <Chip
                style={data.servicios.includes(2) ? styles.selectedChip : styles.chip}
                icon={data.servicios.includes(2) ? () => checkIcon : null}
                onPress={() => selectedChip('servicios', 2)}>Cocina</Chip>
              <Chip
                style={data.servicios.includes(3) ? styles.selectedChip : styles.chip}
                icon={data.servicios.includes(3) ? () => checkIcon : null}
                onPress={() => selectedChip('servicios', 3)}>Estacionamiento</Chip>
              <Chip
                style={data.servicios.includes(4) ? styles.selectedChip : styles.chip}
                icon={data.servicios.includes(4) ? () => checkIcon : null}
                onPress={() => selectedChip('servicios', 4)}>Lavadora</Chip>
              <Chip
                style={data.servicios.includes(5) ? styles.selectedChip : styles.chip}
                icon={data.servicios.includes(5) ? () => checkIcon : null}
                onPress={() => selectedChip('servicios', 5)}>Secadora</Chip>
              <Chip
                style={data.servicios.includes(6) ? styles.selectedChip : styles.chip}
                icon={data.servicios.includes(6) ? () => checkIcon : null}
                onPress={() => selectedChip('servicios', 6)}>A/C</Chip>
              <Chip
                style={data.servicios.includes(7) ? styles.selectedChip : styles.chip}
                icon={data.servicios.includes(7) ? () => checkIcon : null}
                onPress={() => selectedChip('servicios', 7)}>Calefacción</Chip>
              <Chip
                style={data.servicios.includes(8) ? styles.selectedChip : styles.chip}
                icon={data.servicios.includes(8) ? () => checkIcon : null}
                onPress={() => selectedChip('servicios', 8)}>TV</Chip>
            </View>
          </ScrollView>
        </View>

        <Divider />

        <View style={{ alignItems: 'center', flexDirection: 'row', marginVertical: 20, marginHorizontal: 30, borderWidth: 1, borderColor: 'black' }}>
          <TextInput
            label="Enlace de imagen"
            onChangeText={(value) => setInformation('linkImagen', value)}
            underlineColorAndroid="transparent"      
            left={<TextInput.Icon icon="link" color='#4754BA' />}  
            style={{ flex: 1, borderWidth: 0, backgroundColor: 'transparent',  fontSize: 18 }}
          />
        </View>

        <PublicarButton data={data ? data : undefined} />

      </View>
    </ScrollView>
  )
}

export default NewRoom