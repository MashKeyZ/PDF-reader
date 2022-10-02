import { StyleSheet, Text, View,Image, 
    Button,
    TouchableOpacity,
    Alert,
    Dimensions, 
    ProgressBarAndroidBase} from 'react-native'
import React,{useCallback,useState} from 'react'
import logo from '../images/openImg.png'
import logo2 from '../images/openFile.png'
import scan from '../images/scan.png'
import DocumentPicker, { types } from 'react-native-document-picker';
import ImagePicker from 'react-native-image-crop-picker';

const Documents = ({navigation}) => {
    //console.log(item)
    const [imagePath,setPath] = useState('')
    const handleDocumentSelection = useCallback(async () => {
 
            try {
            const response = await DocumentPicker.pick({
                presentationStyle: 'fullScreen',
                type: [types.pdf],
                allowMultiSelection: false,
            })
            
            const hold = response.map((file, index) => {
            
                return file?.uri
            })
            const holdName = response.map((file, index) => {
            
                return file?.name
            })
            console.log(hold[0])
            navigation.push('ViewScreen',{path:hold[0],name:holdName})
                
            } catch (err) {
            console.warn(err);
            }
        }, []);

    const handleReadClick =()=>{
        navigation.push('ImageConvert')
       
    }
    function handleScanClick(){
        console.log("New Nav Path "+imagePath);
        navigation.push('scannerScreen',{imagePath:imagePath})
    }

    const handleImagePicker =()=>{
        const flushPromises = () => new Promise(resolve => setImmediate(resolve));
        console.log('Image picker function')
        ImagePicker.openCamera({
          width: 300,
          height: 400,
          cropping: true,
          multiple: true,
          freeStyleCropEnabled : true,
        }).then(image => {
          let newPath = image.path
          setPath(newPath);
          console.log("Direct path : new, "+newPath)
          console.log("UseEffect Path : "+imagePath);
          handleScanClick(); 
         // navigation.push('scannerScreen',{imagePath:imagePath})
          
        }).catch(err => { console.warn(err);})
      }
 
  return (
    <>
    
        <View style={styles.container}>
            <View style={styles.btn}>
                <TouchableOpacity style={styles.btnCont} onPress={handleDocumentSelection}>
                        <View style={styles.imageCont}>
                            <Image source={logo2} style={styles.image} />
                        </View>
                        <View style={styles.textCont}>
                            <Text style={styles.text}>Open PDF</Text>
                        </View>
                    </TouchableOpacity>      
                </View>

            <View style={styles.btn}>
                <TouchableOpacity style={styles.btnCont} onPress={handleReadClick}>
                    <View style={styles.imageCont}>
                        <Image source={logo} style={styles.image} />
                    </View>
                    <View style={styles.textCont}>
                        <Text style={styles.text}>Image to PDF</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.btn}>
               <TouchableOpacity style={styles.btnCont} onPress={handleScanClick}>
                    <View style={styles.imageCont}>
                        <Image source={scan} style={styles.image} />
                    </View>
                   
                    <View style={styles.textCont}>
                        <Text style={styles.text}>Scanner</Text>
                    </View>

                </TouchableOpacity>      
            </View>
        </View>
   
    </>
  )
}
// <Button title='open Pdf' onPress={handleReadClick} style={styles.button}/>
const styles = StyleSheet.create({
    container:{
        width: Dimensions.get('window').width-5,
        height:'100%',
        margin:5,
        marginTop: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    image:{
        width: (Dimensions.get('window').width/3) ,
        height: '70%',
        resizeMode:'contain',
    },
    text:{
       
        paddingVertical: 6,
        fontSize: 30,
        color: '#FFFFFF',
        fontFamily: 'sans-serif',
        fontWeight: 'bold',  
    },
    btnCont:{
        backgroundColor: '#ff471a',
        width: '100%',
        alignItems: 'center',
        height: '75%',
        borderBottomEndRadius: 50,
        borderTopEndRadius: 50,
        borderTopStartRadius: 35,
        display:'flex',
        flexDirection: 'row',
    },
    btnCont2:{
   
        backgroundColor: '#ff471a',
        width: '100%',
        alignItems: 'center',
        height: '80%',
        borderBottomStartRadius: 50,
        borderTopStartRadius: 50,
        borderTopEndRadius: 35,
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingLeft:30,
    },
    btn:{
        width: '90%',
        height: '30%',
        borderBottomEndRadius: 50,
        borderTopEndRadius: 50,
        borderTopStartRadius: 35,
       
    },
})

export default Documents