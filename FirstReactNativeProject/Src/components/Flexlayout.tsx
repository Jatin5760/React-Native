import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Flexlayout = () => {
  return (
    <View style = {styles.container}>
      <Text style={styles.headerText}>Layout using flex</Text>
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
})

export default Flexlayout