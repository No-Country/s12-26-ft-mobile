import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'fff',
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: normalize(20, 'width'),
    marginTop: normalize(40, 'height'),
  },
  title: {
    fontSize: normalize(18),
    fontWeight: '500',
    marginVertical: normalize(35, 'height'),
    textAlign: 'center',
  },
  cardWrapper: {
    width: '100%',
    marginBottom: normalize(20, 'height'),
  },
});
