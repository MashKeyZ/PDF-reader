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

const Documents = ({item}) => {
    //console.log(item)
    const [path,setPath] = useState()

    useEffect(() =>{
        setPath(item)
    },[item])
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
                    <View style={styles.imageCont}>
                        <Image source={{uri : path}} style={styles.image} />
                    </View>
                        <View style={styles.textCont}>
                            <Text style={styles.text}>#Page 1</Text>
                        </View>
                    <TouchableOpacity style={styles.btn} onPress={handleReadClick}>
                        <View style={styles.imageCont2}>
                            <Image source={logo2} style={styles.image2} />
                        </View>
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
        width: '100%',
        display: 'flex',
        height: Dimensions.get('window').height/7,
       // borderWidth: 1,
        marginTop:5,
        
      
    },
    image:{
        width:80 ,
        height: '70%',
        resizeMode:'contain',
    },
    text:{
       
        paddingVertical: 6,
        fontSize: 30,
        color: '#3d3d4c',
        fontFamily: 'sans-serif',
        fontWeight: 'bold',  
    },
    btnCont:{
        width: '100%',
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal:10,
        
    },
    shad:{
       
        backgroundColor:'white',
        
        width: '100%',
        height: '100%',
       
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
    }
})

export default Documents