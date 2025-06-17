 import { StyleSheet, Text, TextInput, View } from 'react-native'
 import React from 'react'
 
 export default function CustomTextInput(props) {
    // console.log("props" + props.placeholder)
   return (
     <View>
       <TextInput
                 style={styles.Phone}
                placeholder={props.placeholder}
                //  keyboardType='number-pad'
                // onChangeText={p=>Setphone(p)}
                keyboardType={props.keyboardType}
                autoCapitalize={props.autoCapitalize}
              />
     </View>
   )
 }
 
 const styles = StyleSheet.create({

     Phone:{
        borderRadius:5,
        marginTop:15,
        borderWidth:1,
        marginLeft:10,
        marginRight:10,
    },

 })