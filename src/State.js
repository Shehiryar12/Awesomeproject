 import React,{useState} from 'react'
 import{View,Text, Button, TextInput} from "react-native"


export default function Hello(){

const [inputText, setInputText]=useState("abc");



console.log(inputText)


    return(
            
        <View>
            <Text>ali</Text>

           <Button title='change value' onPress={() => setInputText('def')}/>
   
        </View>

   

    );
};

