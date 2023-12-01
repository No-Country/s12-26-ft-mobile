import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: normalize(300),
  },
  image: {
    width: '100%',
    height: normalize(250),
    resizeMode: 'cover',
    marginBottom: normalize(8, 'height'),
  },
  textContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
