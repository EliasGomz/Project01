import { useState } from 'react';
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Checkbox,
  Keyboard,
  Alert,
} from 'react-native';
//import { Card } from "../components"

import style from './styles';
import Card from '../../components/card';

export default function Homepage() {

  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  // bloquear boton 
  function btnBlock() {
    return list.length > 9 ? true : false
  }

  const modifyValue = () => {

    const list =[
      { text: '112', isSelected: false },
      { text: '132', isSelected: false },
    ]

    setList(prevValue => {
      return [
        { text: '112', isSelected: false },
        { text: '132', isSelected: false },
        { text: text, isSelected: false },
      ]
    })
  }
  // agregar tarea
  function addText(text) {
    Keyboard.dismiss();
    if (value !== "") {
      setList(prev => [
        ...prev,
        { text: text, isSelected: false }
      ])
      setValue("")
    } else {
      alert("Ingrese una tarea")
    }
  }

  // validacion de checkbox
  let isSelected = false;
  function setIsSelected(index, value) {
    let data = []


    for (i = 0; i < list.length; i++) {
      if (index === i) {
        data.push({ ...list[i], isSelected: value })
        data.sort((a, b) => { return b.isSelected - a.isSelected })
      } else {
        data.push(list[i])
      }
    }
    setList(data)
  }

  //validar boton de borrar
  // function valueDelete(){
  //     return value.length !== isSelected ? true:false
  // }

  // eliminar item
  function deleteItem(idx) {
    const data = list.filter((item, index) => index !== idx)
    setList(data)
  }


  // view principal
  return (
    <View style={style.container}>
      <Text style={{ color: '#000', marginBottom: 10, marginTop: -10, fontSize: 25 }}>Tareas Diarias</Text>
      <View style={style.container2}>
        <FlatList style={{ flex: 1 }}
          data={list}
          renderItem={({ item, index }) => (
            <Card
              data={item}
              index={index}
              onCheckPress={setIsSelected}
              onDeletePress={deleteItem}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          inverted={true}
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }}
        />
      </View>
      <View style={style.textBoxWrite}>
        <TextInput style={style.txtInput} placeholder="Nueva Tarea" placeholderTextColor={"#D9D9D9"} onChangeText={text => setValue(text)} value={value} />
        <TouchableOpacity style={style.btn} onPress={() => addText(value)} disabled={btnBlock()} >
          <Text style={{ fontSize: 30, color: "#D9D9D9" }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}