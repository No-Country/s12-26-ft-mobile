import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './routes';
import { PaperProvider } from 'react-native-paper';


export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider >
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
