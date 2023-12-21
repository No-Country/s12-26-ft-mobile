import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import Header from '../../components/Profile/Header';
import { ButtonsView, PriceRange } from './components';
import { styles } from './styles/FilterScreen.styles';

const TypeButtons = [
  {
    id: 1,
    name: 'Individual',
  },
  {
    id: 2,
    name: 'Compartida',
  },
  {
    id: 3,
    name: 'Alojamiento entero',
  },
];

const TYPE_PROPERTY = [
  {
    id: 4,
    name: 'Casa',
  },
  {
    id: 5,
    name: 'Departamento',
  },
];

const TYPE_SERVICES = [
  {
    id: 6,
    name: 'Wifi',
  },
  {
    id: 7,
    name: 'Cocina',
  },
  {
    id: 8,
    name: 'Estacionamiento',
  },
  {
    id: 9,
    name: 'Lavandería',
  },
];

const FiltersScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Header showBackIcon={true} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Filtra tu búsqueda</Text>
        </View>
        <ButtonsView
          buttonNames={TypeButtons}
          title='Tipo de habitación'
          iconName='night-shelter'
          isMaterialIcon={true}
        />
        <ButtonsView
          buttonNames={TYPE_PROPERTY}
          title='Tipo de propiedad'
          iconName='home-filled'
          isMaterialIcon={true}
        />
        <PriceRange />
        <ButtonsView
          buttonNames={TYPE_SERVICES}
          title='Servicios'
          iconName='scatter-plot-outline'
          isMaterialIcon={false}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Guardar Filtros</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FiltersScreen;
