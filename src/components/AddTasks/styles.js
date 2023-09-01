import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   container: {
      marginTop: 30,
      width: "100%",
      height: 50,
      borderRadius: 8,
      borderColor: "#0099FF",
      borderWidth: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom:30,
   },

   inputText: {
      width: "80%",
      height: "100%",
      paddingLeft: 10,
      fontSize: 16,
   },

   buttonAdd: {
      width: 50,
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#0099FF",
      borderTopRightRadius: 8,
      borderBottomEndRadius: 8,
   },
});
