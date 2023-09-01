import { useEffect, useRef, useState } from "react";
import { Alert, FlatList, LogBox, Text, View } from "react-native";

import { AddTasks } from "../../components/AddTasks";
import { CardTasks } from "../../components/cardTasks";

import { api } from "../../services/Api";

import { styles } from "./styles";
import { ModalEdit } from "../../components/ModalEdit";

export function Home() {
   const [data, setData] = useState([]);
   const [value, setValue] = useState("");
   const [openModal, setOpenModal] = useState(false);
   const [dataModal, setDataModal] = useState(Number);


   const fetchTask = async () => {
      const response = await api.get("/tasks");
      const tasks = await response.data;
      setData(tasks);
   };

   async function addTask() {
      if (value !== "") {
         await api.post("/tasks", {
            title: value,
            status: "pendente",
         });
         setValue("");
         fetchTask();
      } else {
         Alert.alert("Preencha o campo");
      }
   }

   async function deleleTask(id) {
      await api.delete(`/tasks/${id}`);
      fetchTask();
   }

   function onChangeModal(id) {
      setOpenModal(true);
      setDataModal(id)

   }

   async function editeTask(title, status) {
      await api.put(`/tasks/${dataModal}`,{title,status})
      fetchTask(); 
      setOpenModal(false)  
   }
   
   

   useEffect(() => {
      fetchTask();
   }, [data]);

   return (
      <View style={styles.container}>
         <AddTasks addTasks={addTask} onChangeText={setValue} value={value} />

         <Text style={styles.title}>Tarefas</Text>

         <FlatList
            data={data}
            renderItem={({ item }) => (
               <CardTasks
                  title={item.title}
                  status={item.status}
                  onPressDelete={() => deleleTask(item.id)}
                  onPressEdit={()=>onChangeModal(item.id)}
               />
            )}
            keyExtractor={(item) => item.id.toString()}
         />

         <ModalEdit
            visible={openModal}
            backModal={() => setOpenModal(false)}
            onPress={({title, status}) =>editeTask(title,status)}
            placeholder='Novo Titulo'
         />
      </View>
   );
}
