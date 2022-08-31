import React, { useRef, useState, useEffect } from "react"
import { View, ScrollView,StyleSheet,FlatList, Dimensions,Text, TouchableOpacity, Image, Platform, SafeAreaView, Button } from "react-native"
import Permissions from 'react-native-permissions';
import ImagePicker from 'react-native-image-crop-picker';
import Photo from '../components/photo';

export default function ScannerScreen() {

  const [data,setData] = useState()

 
  function handleImagePicker (){
    const flushPromises = () => new Promise(resolve => setImmediate(resolve));
    console.log('Image picker function')
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      multiple: true,
      freeStyleCropEnabled : true,
    }).then(image => {
      setData(image.path);
      console.log(image.path);
    }).catch(err => { console.warn(err);})
  }
  /**   <FlatList 
          data={data}
          renderItem={Photo}
          keyExtractor={(item,index )=>index}
         
          />   */
  return (
   <>
    <View style={styles.container} >
      <View style={styles.containerScroll}>
        
        <View style={styles.options}>
            <Button style={styles.button} onPress={handleImagePicker} title="Open Camera"/>
        </View>
     
       
        <Photo item={data}/>
        <Photo item={data}/>
        <Photo item={data}/>
        <Photo item={data}/>
        <Photo item={data}/>
        <Photo item={data}/>
        <Photo item={data}/>
      </View>
    </View>
   </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    paddingHorizontal: 5,
    justifyContent: 'center',
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
  },
  containerScroll: {  

  }
})

