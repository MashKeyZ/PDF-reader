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

const Documents = ({data}) => {
    //console.log(item)
    const [path1,setPath] = useState('')
    let count = 0
    useEffect(() =>{
        count +=1;
        setPath(data)
        console.log(count +". Component : "+(data ==undefined ? '' : data))
    },[data])


    const handleReadClick =()=>{
        //navigation.push('ImageConvert')
     
       console.log(item)
    }
    const handleScanClick =()=>{
        navigation.push('scannerScreen')
       
    }
 
  return (
    <>
    
        <View style={styles.container}>
            <View style={styles.shad}>
                <View style={styles.btnCont} >
                    <View style={styles.imageContainer}>
                        <Image source={{uri : data}} style={styles.image} />
                    </View> 
                </View>
            </View>
         
        </View>
   
    </>
  )
}
// <Button title='open Pdf' onPress={handleReadClick} style={styles.button}/>
const styles = StyleSheet.create({
    container:{
        width: '100%',
        display: 'flex',
        height: Dimensions.get('window').height/2,
       // borderWidth: 1,
        marginTop:5,
        justifyContent: 'center',
        justifyItems: 'center',
       
    },
    image:{
        width:'90%',
        height: '90%',
        resizeMode:'cover',
    },
    btnCont:{
        width: '90%',
        height: '100%',
        //backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.10,
        shadowRadius: 1.65,
        elevation: 5,
        borderBottomRightRadius:10,
        display:'flex',
        borderRadius:20,
        alignItems: 'center',
        paddingHorizontal:10,   
    },
    shad:{
        width: '90%',
        height: '100%',
        paddingTop:15,
    },image2:{
        width:40 ,
        height: 30,
        resizeMode:'contain',
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