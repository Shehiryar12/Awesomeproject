 import React, { useState } from "react";
 
 import { View,Text, Button } from "react-native";

 const One = () => {

    const[name,SetName]=useState('shahnawaz')
   
    return(
       
        <View>
                   <Text  style={{fontSize:23, backgroundColor:"green"}}>Shehiryar</Text>
                   <Two username={name} />
                   <Button title="Submitted" onPress={()=>SetName('Taha')}/>
        </View>
    );
 };


 const Two = (props) => {

    console.log(props)
    return(
       
        <View>
                   <Text style={{fontSize:23,backgroundColor:'red' }}>{props.username}</Text>
        </View>
    );
 };

 export default One; 