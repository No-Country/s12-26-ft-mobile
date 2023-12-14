import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export const routes = [
  {
    key: 'buscar',
    focusedIcon: () => <Feather name="search" size={25} color="#400013" />, unfocusedIcon: () => <Feather name="search" size={25} color="#46464F" />
  },
  {
    key: 'guardados',
    focusedIcon: () => <AntDesign name="heart" size={25} color="#400013" />, unfocusedIcon: () => <AntDesign name="heart" size={25} color="#46464F" />
  },
  {
    key: 'perfil',
    focusedIcon: () => <MaterialCommunityIcons name="account-circle" size={25} color="#400013" />,
    unfocusedIcon: () => <MaterialCommunityIcons name="account-circle-outline" size={25} color="#46464F" />
  },
] 