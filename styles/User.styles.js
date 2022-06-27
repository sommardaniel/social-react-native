import { StyleSheet } from "react-native"
export default styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    fontSize: 15,
    padding: 10,
    color: "#FFFF",
    backgroundColor: "#242526",
    flexDirection: "column"
  },
  text: {
    marginTop: 0,
    marginBottom: 5,
    alignItems: "center",
    fontSize: 12,
    textTransform: "uppercase",
    color: "#FFFF",
  },
  textName: {
    marginTop: 0,
    marginBottom: 5,
    alignItems: "center",
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 1,
    textTransform: "capitalize",
    color: "#FFFF",
  },
  title: {
    alignItems: "center",
    fontSize: 25,
    padding: 10,
    letterSpacing: 3,
    textTransform: "uppercase",
    color: "#FFFF",
  },
  image: {
    width: 40, 
    height: 40,
    borderRadius: 50 
  }
})
