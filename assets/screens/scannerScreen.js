import React, { useRef, useState, useEffect } from "react"
import { View, ScrollView,StyleSheet,FlatList, Dimensions,Text, TouchableOpacity, Image, Platform, SafeAreaView, Button } from "react-native"
import Permissions from 'react-native-permissions';
import ImagePicker from 'react-native-image-crop-picker';
import Photo from '../components/photo'
import MiniPhoto from '../components/miniPhoto';
import deleteLogo from '../images/trash.png'
import doneLogo from '../images/done2.png'
import addLogo from '../images/addCam.png'
const ScannerScreen =({navigation})=> {

  const [data,setData] = useState('\\')
  const [isActive,setActive] = useState([])
  const [navData, setNavData] = useState([])
    useEffect(() =>{
      handleImagePicker ()

     },[])
     useEffect(() =>{ 
      setActive(navData.toString().split(","))
      console.log("New Array : "+isActive)
     },[navData])
 
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
      setActive(image.path);
      setNavData(navData =>[...navData,image.path.toString()]);
      console.log("Path List : "+navData)
      console.log(data);
    }).catch(err => { console.warn(err);})
  }

  function pictureStateChange(item){
    console.log("Item clicked")
    setData(item)
  }
   
  /**   <FlatList 
          data={data}
          renderItem={Photo}
          keyExtractor={(item,index )=>index}
          />
          <MiniPhoto data={data} style={styles.miniPhoto}/>

          ({item,index,seperator})=><MiniPhoto data={item}/>
          */

          
 
  return (
   <>
    <View style={styles.container} >

        <View style={styles.miniContainer}>   
          <FlatList 
                data={navData}
                renderItem={({item})=> <MiniPhoto data={item} active={data} setData={setData}/> }
                keyExtractor={(item)=>item.toString()}
                horizontal={true}
               
                />
          </View>

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
  },miniContainer:{
    width:'100%',
    height: Dimensions.get('window').height/7,
    borderWidth: 1,
    borderColor:'#ccd5df',
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 0,
    borderRadius:10,
  },miniPhoto:{
    alignSelf: 'center',
    borderWidth: 5,
    borderColor: 'rgba(60,0,95,255)',
    
  }
})

export default ScannerScreen