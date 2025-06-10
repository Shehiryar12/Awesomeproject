 import { StyleSheet, Text, TextInput, View } from 'react-native'
 import React from 'react'
 
 export default function Program() {
   return (
     <View>
       <Text>input</Text>

       <TextInput style={styles.box}
         placeholder='Enter name'
         autoCapitalize="characters"
         editable={true}
        //  maxLength={6}
         placeholderTextColor={"blue"}
         secureTextEntry={true}
         autoFocus={true}
        // keyboardType='phone-pad'
         blurOnSubmit={true}
         multiline={true}
         numberOfLines={5}

        
       />
     </View>
   )
 }
 
 const styles = StyleSheet.create({
box:{
  
  borderRadius:7,
  borderWidth:2
}
  
 })