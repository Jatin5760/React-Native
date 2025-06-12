import React, { useState } from 'react';
import { View, StyleSheet, ScrollView} from 'react-native';
import Basics from './Src/components/Basics';
import TextInputComponent from './Src/components/TextInput';
import ScrollViewComponent from './Src/components/ScrollView'


function App(): React.JSX.Element {
  
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Basics/>
      <TextInputComponent/>
      <ScrollViewComponent/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container :{
    marginBottom:20,
  },
  scrollViewContent:{
    padding: 20
  }
});
export default App;