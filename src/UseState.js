  import React, {useState } from "react";
 import { View, Text, TextInput,StyleSheet} from "react-native";
 
  export default function Hero(){ 

    const [inputText,setInputText]=useState("")

    const input=(clear)=>{
       setInputText(clear);
    }
    console.log(inputText)

    
   return(
    <View>  
      <TextInput style={style.inputbox}   
        keyboardType='number'
      onChangeText={(r)=>input(r)}
      // onChangeText={(v)=>input(v)}

      />  
        <Text>How</Text>
    </View>
   );
  }
 const style=StyleSheet.create({
 inputbox:{ 
  borderWidth:5,
   borderColor:'orange',
   margin:10,
  borderRadius:8

 }
 })
 
  
 
 
   
  