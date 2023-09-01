import { View, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";

export function AddTasks({ addTasks,value,onChangeText  }) {

   return (
      <View style={styles.container}>
         <TextInput
            placeholder='Qual a sua tarefa'
            value={value}
            onChangeText={onChangeText}
            style={styles.inputText}
         />
         <TouchableOpacity style={styles.buttonAdd} onPress={addTasks}>
            <Ionicons name="add" size={24} color="white" />
         </TouchableOpacity>
      </View>
   );
}
