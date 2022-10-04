import { StyleSheet, Text, View,Image, 
    Button,
    TouchableOpacity,
    Alert,
    Dimensions, 
    ProgressBarAndroidBase} from 'react-native'
import React,{useCallback,useEffect,useState} from 'react'
import logo from '../images/pdf-comp.png'
import logo2 from '../images/delete.png'
import scan from '../images/scan.png'
import DocumentPicker, { types } from 'react-native-document-picker';

const Documents = ({data,active,setData}) => {

    function pictureStateChange(item){
        console.log("Item clicked")
        setData(item)
      }
  return (
    <>
    
        <View style={styles.container}>
            <View style={styles.shad}>
                <View style={styles.btnCont} >
                    <TouchableOpacity style={styles.imageContainer} onPress={()=>pictureStateChange(data)}>  
                       <Image source={{uri : data}} style={[styles.image, {borderColor: data===active? '#1aff1a':'#c6d9ec'}]} />
                       {/*  <Image source={{uri : data}} style={[styles.image]} />*/}
                    </TouchableOpacity> 
                </View>
            </View>
         
        </View>
   
    </>
  )
}
// <Button title='open Pdf' onPress={handleReadClick} style={styles.button}/>
const styles = StyleSheet.create({
    container:{
        width: Dimensions.get('window').width/4 ,
        display: 'flex',
        height: Dimensions.get('window').height/6-15,
        justifyContent: 'center',
        justifyItems: 'center',
        //borderWidth:1,
        borderColor:'#ccd5df',
        marginHorizontal: -7,
    },
    image:{
        width:'100%',
        height: '90%',
        resizeMode:'cover',
        borderWidth:4,
        borderRadius:10,
        
    },
    btnCont:{
        width: '100%',
        height: '100%',
        borderBottomRightRadius:10,
        display:'flex',
        alignItems: 'center',
        paddingHorizontal:10,   
    },
    shad:{
        width: '100%',
        height: '100%',
      
    },
    btn:{
        height: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyItems: 'center',
    },imageContainer:{
        width:'100%',
        height:'100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Documents