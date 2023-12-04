import { View, StyleSheet } from "react-native";
import Navbar from "../../components/Navbar";

const Home = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      flex: 1,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Navbar />
      </View>
    </View>
  );
};

export default Home;
