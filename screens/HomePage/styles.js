import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 40 : StatusBar.currentHeight + 10,
    flex: 1,
    backgroundColor: "#D9D9D9",
    padding: 19,
  },
  container2: {
    flex: 1,
    marginBottom: 58,
  },
  view: {
    elevation: 5,
    shadowColor: "#FFFFFF",
    shadowOffset: { width: 2, height: 12 },
    shadowRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 19,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#FFFFFF",
    marginBottom: 19,


  },
  text: {
    color: '#000',
    maxWidth: '80%',
  },
  btnDel: {
    width: 12,
    height: 12,
    marginLeft: 320,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 5,
    position: 'absolute',
  },
  textBoxWrite: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 19,
  },
  txtInput: {
    elevation: 5,
    shadowColor: "#FFFFFF",
    shadowOffset: { width: 2, height: 12 },
    shadowRadius: 12,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    height: 54,
    paddingLeft: 19,
    width: '80%',
    color: '#000',
    marginLeft: 13,

  },
  btn: {
    backgroundColor: "#FFFFFF",
    height: 54,
    width: 54,
    borderRadius: 100,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default style;
