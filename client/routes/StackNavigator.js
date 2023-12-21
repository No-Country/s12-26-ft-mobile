import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navbar from '../components/Navbar/Navbar';
import { Login, Register } from '../screens';
import RoomInformation from '../components/RoomInformation';
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShadowVisible: false,
        headerShown: false,
      }}
      initialRouteName='Login'
    >
      <Stack.Screen name='Navbar' component={Navbar} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Register' component={Register} />
      <Stack.Screen name='RoomInformation' component={RoomInformation} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
