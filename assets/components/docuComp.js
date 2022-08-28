import { StyleSheet, Text, View,Image, 
    Button,
    TouchableOpacity,
    Alert,
    Dimensions, 
    ProgressBarAndroidBase} from 'react-native'
import React from 'react'
import logo from '../images/pdf-comp.png'

const Documents = ({item}) => {
    console.log(item)
    const handleReadClick =()=>{
        Alert.alert("Clicked")
    }
  return (
    <>
    
        <View style={styles.container}>
             <TouchableOpacity>
              <Image style={styles.image} source={logo}  />
                <View style={styles.textCont}>
                    <Text style={styles.text}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        </View>
   
    </>
  )
}
// <Button title='open Pdf' onPress={handleReadClick} style={styles.button}/>
const styles = StyleSheet.create({
    container:{
        width: Dimensions.get('window').width/2.5,
        margin:5,
        marginTop: 10,
        alignContent: 'center',
        borderColor: '#cccccc',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 20,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderTopWidth: 1,
    },
    image:{
        width: (Dimensions.get('window').width/2.5) -5,
        height: (Dimensions.get('window').height/5) -5,
        resizeMode:'contain',
    },
    text:{
       
        paddingVertical: 6,
        fontSize: 13,
        color: '#FFFFFF',
        fontFamily: 'sans-serif',
        fontWeight: 'bold',  
    },
    textCont:{
        backgroundColor: '#ff3300',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomEndRadius: 10,
    }
})

export default Documents