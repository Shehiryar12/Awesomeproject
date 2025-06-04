 import React from "react";
import { View, Text, TextInput,StyleSheet} from "react-native";

 export default function Men(){

   return(
    <View>
        <TextInput style={style.inputBox}
        
        placeholder="Type Here"
        placeholderTextColor={"red"}
        autoCapitalize="words"
        // editable={false}
        secureTextEntry={true}
        // maxLength={4}
           multiline={true}
           numberOfLines={3}  
           autoFocus={true} 
           blurOnSubmit={true}     
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


 


  
 