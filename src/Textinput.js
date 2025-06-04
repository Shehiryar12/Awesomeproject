import React, {useState} from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

export default function Person() {
  const [text, setText] = useState('');

  return (
    <View style={{ justifyContent: 'center' }}>
      <TextInput
        keyboardType={'name-phone-pad'}
        style={style.inputBox}
        value={text}
        onChangeText={txt => {
          // console.log(txt);
          setText(txt);
        }}
        placeholder="Enter name"
        placeholderTextColor={"green"}
        // secureTextEntry={true}
        autoCapitalize="characters"
        editable={true}  // You can toggle this to false to disable editing
        blurOnsubmit={true}
        // multiline={true}
        // numberOfLines={3}
        // maxLength={5}
        // returnKeyLabel={'search'}
        // onSubmitEditing={() => console.log('Submit')} 
        autoFocus={true}
       
      />

    </View>
  );
}

const style = StyleSheet.create({
  inputBox: {
    borderWidth: 2,
    width: 340,
    borderColor: 'black',
    margin: 8,
    marginTop: 30,
    borderRadius: 30,
  },
});
