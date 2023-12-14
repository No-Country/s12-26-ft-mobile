import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FavoritesScreen, Home } from './screens';
import Home2 from './screens/Home/Home';

export default function App() {
  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  );
}
