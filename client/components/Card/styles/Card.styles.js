import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: normalize(297),
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D7D5DE',
  },
  image: {
    width: '100%',
    height: normalize(188),
    borderTopRightRadius: normalize(12),
    borderTopLeftRadius: normalize(12),
    resizeMode: 'cover',
    marginBottom: normalize(16, 'height'),
  },
  textContainer: {
    width: '100%',
    paddingHorizontal: normalize(16, 'width'),
  },
  textLocation: {
    fontSize: normalize(16),
    fontWeight: '500',
    color: '#1B1B1F',
    lineHeight: normalize(24),
    letterSpacing: 0.5,
  },
  textDescription: {
    fontSize: normalize(14),
    fontWeight: '400',
    color: '#46464F',
    lineHeight: normalize(20),
    letterSpacing: 0.25,
    marginBottom: normalize(8, 'height'),
  },
  textWrapper: {
    width: '100%',
    flexDirection: 'row',
  },
});
