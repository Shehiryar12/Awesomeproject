 import React, {useState} from "react";
import { View, Text, TextInput,Alert,StyleSheet} from "react-native";

 export default function Men(){

  const [inputText, setInputText] = useState("");

  const input=(check)=>{
setInputText(check);
  }

  const submitting=()=>{
    Alert.alert('submit', inputText)
  }
console.log('@@@@acecj',inputText)

   return(
    <View>
        <TextInput style={style.inputBox}
        
        placeholder="Type Here"
        placeholderTextColor={"red"}
        autoCapitalize="words"
        onChangeText={r=>input(r)}
        // editable={false}
        secureTextEntry={true}
        // maxLength={4}
           multiline={false}
           numberOfLines={3}  
           autoFocus={true} 
           blurOnSubmit={true}     
           onSubmitEditing={submitting}
           value={inputText} 
        />
        <Text>How are you</Text>  

        </View> 
   )  ;
   
 }



 const style=StyleSheet.create({
  inputBox:{
      borderWidth:5,
      borderColor:'green',
      margin:10,
      borderRadius:8
  }
 })


 


  
 