import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navbar from '../components/Navbar/Navbar';
import { FiltersScreen, Login, Register, SettingsScreen } from '../screens';

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
      <Stack.Screen name='FiltersScreen' component={FiltersScreen} />
      <Stack.Screen name='SettingsScreen' component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
