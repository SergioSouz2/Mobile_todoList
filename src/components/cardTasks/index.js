import { Text, TouchableOpacity, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";


import { styles } from "./styles";

export function CardTasks({ title, status, onPressDelete,onPressEdit}) {
   return (
      <View style={styles.container}>
         <View style={styles.contentText}>
            <Text numberOfLines={1} ellipsizeMode="tail"  style={styles.title}>
               
               {title}
            </Text>
            <Text style={styles.title}>{status}</Text>
         </View>
         <View style={styles.contentButton}>

            
            <TouchableOpacity style={styles.buttonEdit} onPress={onPressEdit}>
               <MaterialIcons name="edit" size={24} color="white" />
            </TouchableOpacity>


            <TouchableOpacity style={styles.buttonDelete} onPress={onPressDelete}>
               <AntDesign name="delete" size={24} color="white" />
            </TouchableOpacity>
         </View>
      </View>
   );
}
