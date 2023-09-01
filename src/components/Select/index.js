import { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

import { EvilIcons } from "@expo/vector-icons";

import { styles } from "./styles";

export function Select({ options, onChanheSelect, text }) {
   const [statusSelecionado, setStatusSelecionado] = useState([]);
   const [status, setStatus] = useState([
      "Pendente",
      "Em Andamento",
      "completo",
   ]);
   return (
      <View style={styles.container}>
         <Picker
            style={{color:'#000'}}
            dropdownIconColor={'black'}
            selectedValue={statusSelecionado}
            onValueChange={(itemValue) =>
                setStatusSelecionado(itemValue)
            }
         >
            {status.map((stu) => {
               return <Picker.Item label={stu} value={stu} />;
            })}
         </Picker>
      </View>
   );
}
