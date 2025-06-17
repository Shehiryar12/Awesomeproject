 import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
 import React, { useState } from 'react'
 
 export default function Welcome() {

     const [name,Setname]=useState('')
     const [phone,Setphone]=useState('')
     const [email,Setemail]=useState('')
     const [pass,Setpass]=useState('')

    // console.log(name) 
    // console.log(phone)
    // console.log(email)
    // console.log(pass)

   const click = () => {
    console.log(name) 
    console.log(phone)
    console.log(email)
    console.log(pass)
   }



   return (
     <View>
      
       <Text style={{fontSize:22,textAlign:'center'}}>Welcome</Text>

       <TextInput
         style={styles.Registration}   
         placeholder='Enter you name'
          onChangeText={r=>Setname(r)}          
       />
        

       <TextInput
          style={styles.Phone}
         placeholder='Enter phone number'
         keyboardType='number-pad'
         onChangeText={p=>Setphone(p)}
       />

       <TextInput
         placeholder='Enter your email'
         style={styles.Email}
         keyboardType='email-address'
         onChangeText={e=>Setemail(e)}

       />

        <TextInput
         style={styles.Password}
         placeholder="Enter password"
         secureTextEntry={true}
        onChangeText={p=>Setpass(p)}
       />
       <Button 
       title="submit"
       onPress={click}
        />        
            </View>

        
    
   )
 }
 
 const styles = StyleSheet.create({

    Registration:{

        borderRadius:5,
        borderWidth:1,
        marginLeft:10,
        marginRight:10,

    },

    Phone:{
        borderRadius:5,
        marginTop:15,
        borderWidth:1,
        marginLeft:10,
        marginRight:10,
    },

    Email:{
          borderWidth:1,
          marginTop:15,
         marginLeft:10,
         marginRight:10,
    },
    Password:{
         borderWidth:1,  
         marginTop:15,
          marginLeft:10,
         marginRight:10,
         
    }

 })
    