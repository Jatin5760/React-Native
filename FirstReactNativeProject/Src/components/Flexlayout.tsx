import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Flexlayout = () => {
  return (
    <View style = {styles.container}>
      <Text style={styles.headerText}>Layout using flex</Text>
      <Text>Main Axis (Row)</Text>
      <View style = {styles.rowContainer}>
        <View style={[styles.box, styles.redBox]}/> 
        <View style={[styles.box, styles.greenBox]}/> 
        <View style={[styles.box, styles.blueBox]}/> 
      </View>

    {/* Flex Direct is column by default in React Native */}
      <Text>Cross Axis (Column)</Text>
      <View style = {styles.colContainer}>
        <View style={[styles.box, styles.redBox]}/> 
        <View style={[styles.box, styles.greenBox]}/> 
        <View style={[styles.box, styles.blueBox]}/> 
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginBottom: 20,
        flex: 1,
    },
    headerText:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
        textDecorationLine: 'underline'
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    box:{
        height:50,
        width:50,
    },
    redBox:{
        backgroundColor: 'red',
    },
    greenBox:{
        backgroundColor: 'green',
    },
    blueBox:{
        backgroundColor: 'blue',
    },
    colContainer: {
        flexDirection: 'column',
        height:200,
        justifyContent:'space-between',
        marginBottom: 20,
    }
})

export default Flexlayout