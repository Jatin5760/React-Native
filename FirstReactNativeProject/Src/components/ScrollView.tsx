import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

function ScrollViewComponent() {
    return ( 
        <View style={styles.container}>
            <Text style={styles.headerText}>ScrollView Component</Text>
            <ScrollView style={styles.scrollView}
            contentContainerStyle = {styles.scrollViewContent}
            bounces={true}>
            
            </ScrollView>
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    headerText:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
        textDecorationLine: 'underline'
    },
    scrollView:{
        height: 200,
        backgroundColor: '#f0f0f0',
    },
    scrollViewContent:{
        padding:20
    }
})
export default ScrollViewComponent;