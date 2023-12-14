import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'fff',
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: normalize(16, 'width'),
    marginTop: normalize(20, 'height'),
  },
  title: {
    fontSize: normalize(18),
    fontWeight: '500',
    marginVertical: normalize(32, 'height'),
    textAlign: 'center',
    fontSize: normalize(16),
    lineHeight: normalize(24),
    letterSpacing: 0.15,
    color: '#1B1B1F',
  },
  cardWrapper: {
    width: '100%',
    marginBottom: normalize(16, 'height'),
  },
});
