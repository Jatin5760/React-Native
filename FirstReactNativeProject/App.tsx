import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>

      {/* View Component */}
      <View style={styles.boxContainer}>
        <View style={styles.redBox}/>
        <View style={styles.blueBox}/>
        <View style={styles.greenBox}/>
      </View>

      {/* Text Component */}
      <Text style={styles.mainText}>My First App</Text>
      <Text style={styles.nestedText}>
        Text Component can be <Text style={styles.bold}>Nested</Text>
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container :{
    marginBottom:20,
  },
  boxContainer:{
    flexDirection:'row',
    justifyContent: 'space-around'
  },
  redBox: {
    width:50,
    height:50,
    backgroundColor:'red'
  },
  blueBox: {
    width:50,
    height:50,
    backgroundColor:'blue'
  },
  greenBox :{
    width:50,
    height:50,
    backgroundColor:'green'
  },
  mainText: {
    fontSize: 40
  },
  nestedText: {
    fontSize: 20
  },
  bold: {
    fontWeight: 'bold'
  }
});

export default App;