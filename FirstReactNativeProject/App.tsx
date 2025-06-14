import React, { useState } from 'react';
import { View, StyleSheet, ScrollView} from 'react-native';
import Basics from './src/components/Basics';
import TextInputComponent from './src/components/TextInput';
import ScrollViewComponent from './src/components/ScrollView';
import Styling from './src/components/Styling';
import Flexlayout from './src/components/Flexlayout';


function App(): React.JSX.Element {
  
  return (
    <View style={styles.container}>
      <ScrollView 
      nestedScrollEnabled = {true}
      contentContainerStyle={styles.scrollViewContent}>
      <Basics/>
      <TextInputComponent/>
      <ScrollViewComponent/>
      <Styling/>
      <Flexlayout/>
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