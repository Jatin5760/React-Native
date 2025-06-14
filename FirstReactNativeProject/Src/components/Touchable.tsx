import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'

const Touchable = () => {
    
    const [opacityCount , setOpacityCount] = useState(0);
    const [highlightCount , setHiglightCount] = useState(0);
  return (
    <View style = {styles.container}>
       <Text style={styles.headerText}>Touchable Component</Text>
       <TouchableOpacity
       onPress={() => setOpacityCount(opacityCount + 0.1)}
       style = {styles.button}>
        <Text style = {styles.btnText}>Touchable Opacity</Text>
       </TouchableOpacity>


       <TouchableHighlight
       underlayColor={'red'}
       onPress={() => setHiglightCount(highlightCount + 0.1)}
       style = {styles.button}>
        <Text style = {styles.btnText}>Touchable Highlight</Text>
       </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginBottom: 20,

    },
    headerText: {
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
        textDecorationLine: 'underline'
    },
    button:{
        backgroundColor: '#096dbe',
        padding: 15,
        borderRadius: 5,
        marginBottom: 10
    },
    btnText:{
        color: '#fff',
        fontSize:18,
        fontWeight: 'bold',
    }
})

export default Touchable