import {color} from '@src/theme';
import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {flex: 1},
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
  headerContainer: {
    height: 50,
    width: '100%',
    backgroundColor: color.defaultTheme.palette.primaryRed,
    alignItems: 'center',
    marginBottom: 50,
    flexDirection: 'row',
    paddingLeft: 10,
  },
  btnText: {
    color: '#fff',
  },
  headerText: {
    marginLeft: 20,
  },
  btnContainer: {
    height: 50,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    alignContent: 'center',
    borderWidth: 1,
    borderRadius: 20,
    margin: 20,
  },
  error: {
    color: 'red',
    fontSize: 10,
    marginLeft: 10,
  },
});

export default Styles;
