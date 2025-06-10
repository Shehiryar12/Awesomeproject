 import { Button, StyleSheet, Text, View } from 'react-native'
 import React, { useState } from 'react'
 
 export default function DarkState() {
    const[counter,setCounter]=useState(0)
   return (
     <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
       <Text>{counter}</Text>
    <Button title='increment' onPress={ () => setCounter(counter+1) } />

    <Button title='Decrement' onPress={ () => setCounter(counter-1)} disabled ={counter==0? true: false}/>  
          
     </View>
   )
 }
 
 const styles = StyleSheet.create({})