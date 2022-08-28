import { StyleSheet, Text, View,Image, 
    Button,
    TouchableOpacity,
    Alert,
    Dimensions, 
    ProgressBarAndroidBase} from 'react-native'
import React from 'react'
import logo from '../images/convert.png'
import logo2 from '../images/pick.png'

const Documents = ({navigation}) => {
    //console.log(item)
    const handleReadClick =()=>{
        Alert.alert("Image will be converted to pdf")
    }
    const handleNavClick = () => {
        Alert.alert("PDF file opening")
        navigation.push('ViewScreen')
    }
  return (
    <>
    
        <View style={styles.container}>
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
               <TouchableOpacity style={styles.btnCont2} onPress={handleNavClick}>
                    <View style={styles.textCont}>
                        <Text style={styles.text}>Open PDF</Text>
                    </View>
                    <View style={styles.imageCont}>
                        <Image source={logo2} style={styles.image} />
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
        backgroundColor: '#ff5c33',
        width: '100%',
        alignItems: 'center',
        height: '100%',
        borderBottomEndRadius: 50,
        borderTopEndRadius: 50,
        borderTopStartRadius: 35,
        display:'flex',
        flexDirection: 'row',
    },
    btnCont2:{
        marginTop:20,
        backgroundColor: '#ff471a',
        width: '100%',
        alignItems: 'center',
        height: '100%',
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