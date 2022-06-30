import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from '../screens/HomePage/styles';


const Card = ({ onCheckPress, onDeletePress, index, data }) => {

  return (
    <View style={styles.view}>
      <TouchableOpacity disabled={data.isSelected}  style={styles.btnDel} onPress={() => onDeletePress(index)} ></TouchableOpacity>
      <CheckBox
        value={data.isSelected}
        onValueChange={(value) => onCheckPress(index, value)}
      />
      <Text style={{ ...styles.text, textDecorationLine: data.isSelected ? "line-through" : "none" }}>{data.text}</Text>

    </View>
  )
}

export default Card;