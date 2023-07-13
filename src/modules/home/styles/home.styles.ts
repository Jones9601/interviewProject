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
  btnText: {
    color: '#fff',
  },
  addBtnContainer: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  headerContainer: {
    height: 50,
    width: '100%',
    backgroundColor: 'red',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  deleteText: {
    marginLeft: 20,
  },
  userDetailsContainer: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  rowContainer: {
    flexDirection: 'row',
  },
});

export default Styles;
