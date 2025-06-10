 import { Button, StyleSheet, Text, View } from 'react-native'
 import React, { useState } from 'react'
 
 export default function ErrorState() {
    const[errorMessage,Seterrormessage]=useState('this is error')
   return (
     <View>
       <Text>{errorMessage}</Text>
       <Button title='Press' onPress={()=>Seterrormessage("not an error ")}/>
     </View>
   )
 }
 
 const styles = StyleSheet.create({})