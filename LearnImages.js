import {Alert, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function LearnImages() {
  return (
   
      <View>

     <ScrollView  showsVerticalScrollIndicator={false} >
      <Image
         style={{width:500,height:300}}
        source={require('./src/images/light.gif')}
        resizeMode='contain'
      />

       <Image
         style={{width:200,height:400}}
         source={require('./src/images/world.gif')} 

      />

       {/* <Image

         style={{width:200,height:100,marginLeft:80}}
         source={require('./src/images/car.gif')}  

      /> */}
       <Image

         style={{width:400,height:200}}
         source={require('./src/images/world.gif')} 
         resizeMode='contain' 

      />

      </ScrollView>
      </View>
  
  );
}

const styles = StyleSheet.create({});
