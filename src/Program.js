 import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
 import React, { useState } from 'react'
 
 export default function Program() {

  const [name,Setname]=useState('abc')



   return (
     <View>
       <Text>input</Text>

       <TextInput style={styles.box}
         placeholder='Enter name'

         autoCapitalize='none'

         editable={true}

        //  maxLength={13}
         

         placeholderTextColor={"blue"}

         secureTextEntry={true}

         autoFocus={true}

          // keyboardType='phone-pad' 

         blurOnSubmit={true}

         multiline={true}

        //  numberOfLines={5}
         

        onChangeText={(name)=> {  console.log(name);Setname(name)}}
       value={name}
        
       />
     </View>
   )
 }
 
 const styles = StyleSheet.create({
box:{
  
  borderRadius:7,
  borderWidth:2,
  color:'green',
  fontSize:22,
  backgroundColor:"red",
  paddingHorizontal:20,
  margin:10
}
  
 })