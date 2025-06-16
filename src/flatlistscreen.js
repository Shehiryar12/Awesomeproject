 import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
 import React from 'react'
 
 const Screen = () => {

    const profile=[
         
        {
          title:"djvn",
          imageUrl:require('../src/images/animal.jpg')
        }

    ]

   return (
     <View>
       <Text>screen</Text>
       <FlatList data={profile}  renderItem={({ item }) => {
        
       return (
        <View>
        <Image source={item.imageUrl}/>
        <Text>{item.title}</Text>
       </View>
       )

    }
    
    }/>
       
     </View>
   )
 }
 
 export default Screen
 
 const styles = StyleSheet.create({})