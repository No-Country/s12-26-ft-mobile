import Home from './screens/Home/Home';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>);
}