import {StyleSheet, View, Text } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.text}>
                PDF Reader
            </Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
        height: 40,
       
        backgroundColor : '#2196F3',
        borderBottom: '1px solid black',
    },
    button:{
        position: 'absolute',
        marginTop: -25,
        marginLeft: 3,
        padding: 25,
    },
    progressView:{
        width: '100%',
        alignItems : 'center',
        backgroundColor : '#2196F3',
        padding : 5,
    },
    text:{
        color : 'white',
        fontWeight : 'bold',
        fontSize: 20,
    }
});


export default Header