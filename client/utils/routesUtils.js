import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export const routes = [
  {
    key: 'buscar',
    focusedIcon: () => <Feather name="search" size={35} color="#6558F5" />, unfocusedIcon: () => <Feather name="search" size={35} color="gray" />
  },
  {
    key: 'guardados',
    focusedIcon: () => <AntDesign name="heart" size={35} color="#6558F5" />, unfocusedIcon: () => <AntDesign name="heart" size={35} color="gray" />
  },
  {
    key: 'perfil',
    focusedIcon: () => <MaterialCommunityIcons name="account-circle" size={35} color="#6558F5" />,
    unfocusedIcon: () => <MaterialCommunityIcons name="account-circle-outline" size={35} color="gray" />
  },
] 