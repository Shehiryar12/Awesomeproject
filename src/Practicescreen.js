 import {FlatList, Image, StyleSheet, Text, View } from 'react-native'
 import React from 'react'
 
 const Practicescreen = () => {

    const pic=[
        {
            Name:"Arif",
            Email:"Arif@gmail.com",
            Phonenumber:78985214988,
            ImageUrl:require('../src/images/alvi.jpg'),
            key:0
        },

        {
            Name:"Shehbaz",
            Email:"Shehbaz@gmail.com",
            Phonenumber:4675248475838,
            ImageUrl:require('../src/images/shehbaz.jpg'),
             key:1
    
        },

         {
            Name:"Imran",
            Email:"Imran@gmail.com",
            Phonenumber:19787258475838,
            ImageUrl:require('../src/images/imran.jpg'),
             key:2
        },
              
         {
            Name:"Zardari",
            Email:"Zardari@gmail.com",
            Phonenumber:3852986475838,
            ImageUrl:require('../src/images/zardari.jpg'),
             key:3
    
        },

         {
            Name:"Nawaz",
            Email:"Nawaz@gmail.com",
            Phonenumber:925248475838,
            ImageUrl:require('../src/images/nawaz.jpg'),
             key:4
    
        },


    ]
   return (
     <FlatList data={pic}
      
     keyExtractor={item=>item?.key}
     renderItem={({item})=>{
        return(
            <View>
                <Text>{" Name: " + item.Name}</Text>
                <Text>{" Email: " + item.Email}</Text>
                <Text>{" PhoneNumber: " + item.Phonenumber}</Text>
                <Image source={item.ImageUrl}/>

                 {/* <Text>{" Name: " + item.Name}</Text> */}


            </View>

           
        )
     }}/>
   )
 }
 
 export default Practicescreen
 
 const styles = StyleSheet.create({})