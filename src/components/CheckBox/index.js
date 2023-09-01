import { Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { styles } from "./styles";
import { useEffect, useState } from "react";

export function CheckBox({ options = [], onChange, status = false }) {
   const [selected, setSelected] = useState([]);
   const [check, setCheck] = useState([]);
   
   function toggle(id,op) {
      let index = selected.findIndex((i) => i === id);
      let arrSelecteds = [...selected];
      
      if (index !== -1) {
         arrSelecteds.splice(index, 1);
      } else {
         status ? arrSelecteds.push(id) : (arrSelecteds= [id]);
         
      }

      setSelected(arrSelecteds);
      setCheck(op)
   }
 
    
    useEffect(() => onChange({id:selected,check:check}), [selected]);
   return (
      <View style={styles.container}>
         {options.map((op, index) => (
            <View style={styles.optionsContainer}>
               <TouchableOpacity
                  style={[
                     styles.touchable,
                     {
                        backgroundColor:
                           selected.findIndex((i) => i === op.id) !== -1
                              ? "#3EBD93"
                              : "#FFF",
                     },
                  ]}
                  onPress={() => toggle(op?.id,op?.status)}
               >
                  {selected.findIndex((i) => i === op.id) !== -1 ? (
                     <Entypo name="check" size={16} color="white" />
                  ) : null}
               </TouchableOpacity>
               <Text style={styles.opText}>{op?.status}</Text>
            </View>
         ))}
      </View>
   );
}
