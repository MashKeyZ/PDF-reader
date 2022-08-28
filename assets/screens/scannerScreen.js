import React, { useRef, useState, useEffect } from "react"
import { View, StyleSheet, Text, TouchableOpacity, Image, Platform, SafeAreaView, Button } from "react-native"
import Permissions from 'react-native-permissions';
import ImagePicker from 'react-native-image-crop-picker'

export default function ScannerScreen() {
 
  function handleImagePicker (){
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  }

  return (
   <>
    <SafeAreaView style={styles.container} >
      <View style={styles.options}>
          <Button style={styles.button} onClick={handleImagePicker} title="Open Camera"/>
      </View>
    </SafeAreaView>
   </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',

  },
  button: {
    alignSelf: "center",
    position: "absolute",
    bottom: 32,
  },
  buttonText: {
    backgroundColor: "rgba(245, 252, 255, 0.7)",
    fontSize: 32,
  },
  preview: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
  },
  permissions: {
    flex:1,
    justifyContent: "center",
    alignItems: "center"
  }
})

