 import { Button, StyleSheet, Text, View } from 'react-native'
 import React, { useState } from 'react'
 
 export default function BooleanState() {
    const[isloading,setisLoading]=useState(false)
   return (
     <View>
       <Text>{isloading ? 'true':'false'}</Text>
       <Button title='click' onPress={()=>setisLoading(!isloading)}/>
     </View>
   )
 }
 
 const styles = StyleSheet.create({})