 import { StyleSheet, Text, View } from 'react-native'
 import React from 'react'
 
 export default function LearnTextComponent() {
   return (
     <View style={{flex:1}}>
       <Text style={styles.textStyle}>learnTextComponent</Text>
       <Text numberOfLines={3} ellipsizeMode="head">learning basics of programming nsjcncjsncsjnnscjncjn
        vknvndjvndjvnjdnnjnsjcnjcsncjsncsjcnscjsncjnjvnjvnjvnjnevnvjnvnvjvnvnejjvenvjnvj
       </Text>
      
       <Text onPress={()=>alert('submitted')}>click me</Text>  
       <Text>this is the text of children </Text>
       <Text selectable={true}> copy this content </Text>

     </View>
   )
 }
 
 const styles = StyleSheet.create({

    textStyle:{
        color:'pink',
        fontSize:21,
        // textAlign:'right',
        // textAlign:'center',
        textAlignVertical:'top',
        // backgroundColor:'red',
        flex:1,
        lineHeight:40,
        // textTransform:'uppercase'
        textTransform:'capitalize',
        userSelect:'all',
        
    },
    

 })