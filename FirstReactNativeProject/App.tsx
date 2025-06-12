import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Basics from './Src/components/Basics';
import TextInputComponent from './Src/components/TextInput';


function App(): React.JSX.Element {
  
  return (
    <View style={styles.container}>
      <Basics/>
      <TextInputComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container :{
    marginBottom:20,
  },
});
export default App;