import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Styling = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 5,
          marginBottom: 15,
        }}>
        <Text
          style={{
            color: '#fff',
            fontSize: 15,
            fontWeight: 'bold',
          }}>
          Inline Styling Example
        </Text>
      </View>

      <View
        style={[
          styles.combinedStyle,
          {borderWidth: 2, borderColor: 'purple'},
        ]}>

            <Text style={[styles.combinedText, {textDecorationLine:'underline', color:'red', fontWeight:'bold'}]}>Combined Text Style with different colour</Text>
            <Text style={[styles.combinedText, {textDecorationLine:'underline'}]}>Combined Text Style with different colour</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  combinedStyle: {
    backgroundColor: 'lightyellow',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  combinedText:{
    fontSize:14
  }
});

export default Styling;
