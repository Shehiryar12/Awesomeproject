import React from 'react';

import {Button, Text, View} from 'react-native';

const Ali = () => {
  return (
    <View style={{marginTop: 10, backgroundColor: 'black', flex:1}}>

      <Text style={{fontSize: 20, color: 'white'}}>
        My name is shehiryar zahid she
      </Text>

      <Text style={{fontSize: 20, color: 'white'}}>
        I am react-native developer
      </Text>
 
      <View style = {{marginTop: 60,backgroundColor:'pink'}}>
        <Button title="submit" color="green"></Button>
      </View>
    
      <Ahmed />

    </View>
  );
};

const Ahmed = () => {
    return(
 
      <View>
        <Text style={{fontSize:30,color:'white'}}>DATA:-</Text>
            <Text style={{fontSize:20 ,color:'white'}}>Age:22</Text>
      </View>       
    );
};
export default Ali;

