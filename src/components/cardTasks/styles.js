import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        backgroundColor:'#0099FF',
        width:'100%',
        height:80,
        marginTop:10,
        borderRadius:8,
        padding:10,
        flexDirection:"row",
        justifyContent:"space-between",
    },

    contentText:{
        width:'60%'
        
        
        
    },
    
    title:{
        fontSize:16,
        color:'black',
        marginBottom:10,
        width:'100%'
    },

    contentButton:{
        flexDirection:"row",
        width:'40%',
        justifyContent:"center",
        alignItems:"center",
        gap:10,
        
    },

    buttonEdit:{
        width:50,
        height:50,
         justifyContent:"center",
        alignItems:"center",
        backgroundColor:'#229954',
        borderRadius:8,

    },

    buttonDelete:{
        width:50,
        height:50,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'#78281F',
        borderRadius:8,


    },


})