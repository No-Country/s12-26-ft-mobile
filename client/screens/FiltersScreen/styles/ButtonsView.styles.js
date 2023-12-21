import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

export const styles = StyleSheet.create({
  title: {
    fontSize: normalize(16),
    fontWeight: '500',
    color: '#1b1b1f',
    textAlign: 'center',
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  subTitleContainer: {
    flexDirection: 'row',
    paddingLeft: normalize(16, 'width'),
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 16,
    marginBottom: normalize(9, 'height'),
  },
  button: {
    minWidth: normalize(94),
    height: normalize(32),
    paddingHorizontal: normalize(16, 'width'),
    paddingVertical: normalize(6, 'height'),
    borderRadius: normalize(8),
    borderColor: '#777680',
    borderWidth: 1,
    borderStyle: 'solid',
    marginRight: normalize(8, 'width'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    fontSize: normalize(14),
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 20,
    letterSpacing: 0.1,
  },
  separatorContainer: {
    width: '100%',
    paddingHorizontal: normalize(16, 'width'),
    marginTop: normalize(20, 'height'),
    marginBottom: normalize(16, 'height'),
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#C7C5D0',
  },
});
