import React, { useRef, useState, useEffect } from "react"
import { View, ScrollView,StyleSheet,FlatList, Dimensions,Text, TouchableOpacity, Image, Platform, SafeAreaView, Button } from "react-native"
import Permissions from 'react-native-permissions';
import ImagePicker from 'react-native-image-crop-picker';
import Photo from '../components/photo';
import deleteLogo from '../images/trash.png'
import doneLogo from '../images/done2.png'
import addLogo from '../images/addCam.png'
const ScannerScreen =({navigation})=> {

  const [data,setData] = useState()

    useEffect(() =>{
      handleImagePicker ()
      //setData(navigation.state.params.imagePath)
      console.log(navigation.state.params.imagePath)
     },[])
 
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
      console.log(data);
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
        <View style={styles.photoContainer}>
              <Photo data={data} style={styles.photo} /> 
        </View>
        <View style={styles.navigationContainer}>
            <View style={styles.nav}>
              <View style={styles.logoCont}>
                <TouchableOpacity>
                <Image style={styles.logo} source={deleteLogo} />
                </TouchableOpacity> 
              </View>
              <View style={styles.logoCont}>
              <TouchableOpacity>
                <Image style={styles.logo} source={doneLogo} />
              </TouchableOpacity>
              </View>
            </View>
              <View style={styles.logoCont2}>
              <TouchableOpacity onPress={handleImagePicker}>
                <Image style={styles.logo} source={addLogo}  />
              </TouchableOpacity>
              </View>
        </View>
        <View style={styles.containerScroll}>
          
        </View>
      {/*<View style={styles.options}>
            <Button style={styles.button} onPress={handleImagePicker} title="Open Camera"/>
        </View>*/}
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
    bottom: 5,
    
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

  },
  photoContainer:{
    width: "100%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft:58,
  },photo:{
    alignSelf: "center",
    padding:0,

  },navigationContainer:{
    marginTop: 30,
    width: "100%",
    height: 65,
    borderColor:"black",
    borderRadius:1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav:{
    width:"80%",
    height:"100%",
    backgroundColor:"white",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.10,
    shadowRadius: 1.65,
    elevation: 5,
    borderBottomRightRadius:30,
    display:'flex',
    flexDirection: 'row',
    borderRadius:30,
    alignItems: 'center',
    justifyContent: "space-between",
    paddingHorizontal:20,
  },logoCont2:{
    position: 'absolute',
    top:-20,
    backgroundColor:"white",
    borderRadius:100/2,
    padding:5,
  }
})

export default ScannerScreen