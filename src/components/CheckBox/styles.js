import { StyleSheet } from "react-native";

export const styles= StyleSheet.create({
    container:{
        marginTop:20,

    },

    optionsContainer:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:7,
        

    },

    touchable:{
        height:20,
        width:20,
        borderRadius:4,
        justifyContent:"center",
        alignItems:"center",
        borderColor: '#3EBD93',
        borderWidth:2,
    },  

    opText:{
        marginLeft:12,
        color:'#555',
        fontSize:16,
        fontWeight:'600'
    }
})