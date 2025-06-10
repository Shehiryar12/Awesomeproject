import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function CountState() {
    const[count,setCount]=useState(123)


  return (
    <View>
      <Text>{count}</Text>
      <Button title='click' onPress={() => setCount(765)}/>

          
       
    </View>
  )
}

const styles = StyleSheet.create({})