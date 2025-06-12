// // import {
// Text, View
//  } from "react-native"

// // const App = () => {
// //     return(
// //         <View>
// //             <Text>hello world</Text>
// //         </View>
// //     )
// // }

// // export default App

// export default MyComponent;
// import {
//     StyleSheet,
//     Text,
//     View
//   } from "react-native";

//   const App = () => {
//         return(

//        <View style={styles.container}>
//             <Text style={{fontSize:40}}>This is responsive website</Text>
//        </View>

//         )
//     }

//     const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         backgroundColor: 'green',
//       }
//   })

//   export default App;

// <View style={styles.container}>
//        <Text  style={{fontSize:40}}>How are you</Text>
// </View>

//   const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         backgroundColor: 'red'
//     }
//   })

import {Text, View, StyleSheet} from 'react-native';

    import Hero from './src/UseState';
    import Programs from './src/mobile';
import Hello from './src/State';
import CountState from './src/CountState';
import NameState from './src/NameState';
import ErrorState from './src/ErrorState';
import BooleanState from './src/BooleanState';
import DarkState from './src/DarkState';
import Person from './src/Textinput';
import Program from './src/Program';
import Name from './src/Props';
import One from './src/Propstwo';
import Laptops from './src/mobile';
import LearnTextComponent from './src/LearnTextComponent';
import LearnImages from './LearnImages';
import Welcome from './src/Testtextinput';
import Add from './src/TestuseState';
import Testtextiputtwo from './src/Testtextinputtwo';
import Testtextinputtwo from './src/Testtextinputtwo';













const App = () => {
  return (

<Testtextinputtwo/>
  );
  };

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  box1: {
    flex: 1,
    backgroundColor: 'green',
  },

  box2: {
    flex: 1,
    backgroundColor: 'yellow',
  },

  InnerBox1: {
    flex: 1,
    backgroundColor: 'red',
    margin: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingbottom: 20,

    //   marginRight:20,
    //   marginTop:30,
    //   bottom:50
  },

  InnerBox2: {
    flex: 1,
    backgroundColor: 'grey',
    margin: 20,
    paddingTop: 20,
    paddingLeft: 20,
  },

  InnerBox3: {
    flex: 1,
    backgroundColor: 'pink',
    margin: 20,
    paddingTop: 20,
    paddingLeft: 20,
  },
  InnerBox4: {
    flex: 1,
    backgroundColor: 'blue',
    margin: 20,
    paddingTop: 20,
    paddingLeft: 20,
  },
  InnerBox5: {
    flex: 1,
    backgroundColor: 'indigo',
    margin: 20,
    paddingTop: 20,
    paddingLeft: 20,
  },
  InnerBox6: {
    flex: 1,
    backgroundColor: 'saddlebrown',
    margin: 20,
    paddingTop: 20,
    paddingLeft: 20,
  },
});

export default App;
