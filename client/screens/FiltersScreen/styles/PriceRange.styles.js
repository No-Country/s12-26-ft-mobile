import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: normalize(16, 'width'),
  },
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
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 16,
    marginBottom: normalize(9, 'height'),
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: normalize(156),
    height: normalize(56),
    borderRadius: normalize(8),
    borderColor: '#46464F',
    borderWidth: 1,
    borderStyle: 'solid',
    paddingHorizontal: normalize(16, 'width'),
    fontSize: normalize(16),
    fontWeight: '500',
    color: '#46464f',
    textAlign: 'center',
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#C7C5D0',
    marginTop: normalize(20, 'height'),
    marginBottom: normalize(16, 'height'),
  },
});
