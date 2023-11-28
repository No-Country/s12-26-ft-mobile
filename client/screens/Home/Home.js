import { StatusBar } from "expo-status-bar";
import { View, Text} from "react-native";

export default function Home() {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  return (
    <View>
      <Text style={{marginTop: 40}}>Esto funciona {apiUrl}</Text>
      <StatusBar style="auto" />
    </View>
  )
}
