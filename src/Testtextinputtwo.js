import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Testtextinputtwo = () => {
   const[name,Setname]=useState('')
   const[phone,Setphone]=useState('')
   const[email,Setemail]=useState('')
   const[password,Setpassword]=useState('')

   const touch=()=>{
       
   console.log(name);
   console.log(phone);
   console.log(email);
   console.log(password)

   }

  
   

  return (
    <View>
      <Text style={{fontSize:22,textAlign:"center"}}>Form</Text>

      <TextInput       
         style={styles.name}
         placeholder='Enter your name' 
         onChangeText={(n)=>Setname(n)}      
      />

       <TextInput       
         style={styles.phone}
         placeholder='Enter your phone'  
         keyboardType='phone-pad'  
         onChangeText={(m)=>Setphone(m)}      
   
      />

       <TextInput       
         style={styles.email}
         placeholder='Enter your email'  
         keyboardType='email-address'
        onChangeText={(e)=>Setemail(e)}      
     
      />

       <TextInput       
         style={styles.password}
         placeholder='Enter your password'  
         secureTextEntry={true}  
         onChangeText={(p)=>Setpassword(p)}      
   
      />

      <Button  title='Submit' style={styles.button} onPress={touch} />
    </View>
  )
}
export default Testtextinputtwo

const styles = StyleSheet.create({
  name:{
       borderWidth:1,
       marginLeft:10,
       marginRight:10,
        borderRadius:7

  },

  phone:{
       borderWidth:1,
       marginLeft:10,
       marginRight:10,
       marginTop:10,
       borderRadius:7
  },

  email:{
       borderWidth:1,
       marginLeft:10,
       marginRight:10,
       marginTop:10,
       borderRadius:7

  },

  password:{
       borderWidth:1,
       marginLeft:10,
       marginRight:10,
       marginTop:10,
       borderRadius:7,
  },

}
)