import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Modal, Text, TouchableOpacity, TextInput } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";
import { CheckBox } from "../CheckBox";

export function ModalEdit({ visible, backModal, onPress,placeholder}) {
   const [taskEdit, setTaskEdit] = useState("");
   const [status, setStatus] = useState("");

   const optionsStatus = [
      { id: 1, status: "pendente" },
      { id: 2, status: "em andamento" },
      { id: 3, status: "concluido" },
   ];

 
  
   return (
      <Modal visible={visible} animationType="slide" transparent={true}>
         <View style={styles.container}>
            <View style={styles.content}>
               <TouchableOpacity onPress={backModal}>
                  <Ionicons name="arrow-back" size={24} color="black"  />
               </TouchableOpacity>
               <View>
                  <TextInput
                     onChangeText={setTaskEdit}
                     placeholder={placeholder}
                     style={styles.inputText}
                  />

                  <CheckBox
                     options={optionsStatus}
                     onChange={(op) => setStatus(op.check)}
                  />
               </View>
               <View style={styles.conteinerButton}>  
                  <TouchableOpacity style={styles.button} onPress={()=>onPress({title:taskEdit, status:status})}>
                     <Text style={styles.buttonText}>Enviar</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </View>

         <StatusBar style="light" backgroundColor="rgba(0,0,0,0.5)" />
      </Modal>
   );
}
