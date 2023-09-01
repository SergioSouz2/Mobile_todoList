import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'rgba(0,0,0,0.5)',
        
    },
    content:{
        backgroundColor:'white',
        padding:20,
        width:'90%',
        borderRadius:10,
        height:280,
    },

    inputText:{
        marginTop:20,
        borderWidth:1,
        borderColor:'#0099FF',
        borderRadius:5,
        padding:8,
    },
    conteinerButton:{
        alignItems:"flex-end",
    },
    button:{
        padding:10,
        alignItems:"center",
        justifyContent:"center",
        borderWidth:1,
        borderRadius:8,
        borderColor:'#1f1f1f',
        backgroundColor: '#0099FF'
    },

    buttonText:{
        fontSize:14,
        fontWeight:"bold",
        color: '#FFF'
    }
})