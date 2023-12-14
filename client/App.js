import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, SafeAreaView } from 'react-native';
import Navbar from './components/Navbar/Navbar';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Navbar />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
