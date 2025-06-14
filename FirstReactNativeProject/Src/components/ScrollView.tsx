import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';

function ScrollViewComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>ScrollView Component</Text>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={true}
        nestedScrollEnabled = {true}
        bounces={true}>
        {[...Array(20)].map((_, index) => (
          <View key={index} style={styles.box}>
            <Text style={styles.boxText}>{index + 1}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    textDecorationLine: 'underline',
  },
  scrollView: {
    height: 200,
    backgroundColor: '#f0f0f0',
  },
  scrollViewContent: {
    padding: 20,
  },
  box: {
    height: 40,
    marginBottom: 10,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
export default ScrollViewComponent;
