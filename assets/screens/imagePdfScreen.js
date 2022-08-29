import React,{useState, useCallback} from 'react';
import { Button, View,StyleSheet, Alert,Text,Dimensions,DialogInput, TouchableOpacity,Image } from 'react-native';
import RNImageToPdf from 'react-native-image-to-pdf';
import DocumentPicker, { types } from 'react-native-document-picker';
import { SafeAreaView } from 'react-navigation';
import OpenFile  from '../images/open.png'
import SaveFile  from '../images/save.png'
import Convert  from '../images/conv.png'

const ImageToPdf = ({navigation}) => {
    const [fileResponse, setFileResponse] = useState([]);
    const [fileName,setFileName] = useState([]);
    const [visible, setVisible] = useState(false);
    const [pdfPath, setPdfPath] = useState('');
    const [pdfNewPath, setNewPdfPath] = useState('');
    const [fileNewName,setNewFileName] = useState([]);
    
        const handleDocumentSelection = useCallback(async () => {
           
           
            try {
            const response = await DocumentPicker.pick({
                presentationStyle: 'fullScreen',
                type: [types.images],
                allowMultiSelection: true,
            })
            
           const hold = response.map((file, index) => {
               
                return file?.uri
            })
            const holdName = response.map((file, index) => {
               
                return file?.name
            })
            setFileName(holdName[0])
           
                setFileResponse(hold);
                console.log(fileResponse);
            } catch (err) {
            console.warn(err);
            }
        }, []);

    const myAsyncPDFFunction = async () => {
        const  Name = fileName.split(".")[0]+'_PDF-studio.pdf';
        try {

            const options = {
                imagePaths:  fileResponse,
                name: Name,
                maxSize: { // optional maximum image dimension - larger images will be resized
                    width: 900,
                    height: Math.round(Dimensions.get('window').height / Dimensions.get('window').width * 900),
                },
               /* quality: .1, // optional compression paramter*/
            };
            const pdf = await RNImageToPdf.createPDFbyImages(options);
            setPdfPath(pdf.filePath) 
            console.log(pdf.filePath);
            Alert.alert("File has been converted to pdf!!!")
            const flushPromises = () => new Promise(resolve => setImmediate(resolve));
           // saveDirectory();
        } catch(e) {
            console.log(e);
         
        }
    }

   const saveDirectory =async  () =>{
    const flushPromises = () => new Promise(resolve => setImmediate(resolve));
        var RNFS = require('react-native-fs');
        
        var nam = fileName.split(".")[0]+'_img-pdf';
        const dest = RNFS.DownloadDirectoryPath+'/'+nam+'.pdf'
       
         RNFS.moveFile(pdfPath,dest)
            .then((name)=>{
                setNewPdfPath(dest);
                setNewFileName(nam)
             Alert.alert("File saved to documents!! "+pdfPath)
              return  navigation.push('ViewScreen',{path:dest,name:nam});
            })
            .catch((err) =>{
                console.log('An error occured')
              return console.log( err)
              
            })
           
    }

    return (
        <>
           <View style={styles.container}>
                <TouchableOpacity style={styles.button1} onPress={handleDocumentSelection}>
                    <View style={styles.imgCont}>
                        <Image style={styles.image} source={OpenFile}/>
                    </View>
                    <Text style={styles.text}>Select </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.button1} onPress={myAsyncPDFFunction}  >
                    <View style={styles.imgCont}>
                        <Image style={styles.image} source={Convert}/>
                    </View>
                    <Text style={styles.text}>Convert</Text>
                </TouchableOpacity>
                <TouchableOpacity title="Save" style={styles.button1} onPress={saveDirectory}>
                    <View style={styles.imgCont}>
                        <Image style={styles.image} source={SaveFile}/>
                    </View>
                    <Text style={styles.text}>Save</Text>
                </TouchableOpacity>
                <Text>{fileName}</Text>
           
           </View >
        </>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        paddingHorizontal:10,
    },
    button1:{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        margin: 5,
        backgroundColor : '#ff471a',
        alignItems: 'center',
        padding: 20,
        borderRadius: 35,
        justifyContent: 'center',
    },
    progressView:{
        
        alignItems : 'center',
        backgroundColor : '#2196F3',
        padding : 5,
    },
    text:{
        color : 'white',
        fontSize:23,
        fontWeight: 'bold',
    },imgCont:{
        marginHorizontal:10,
    }
});


  export default ImageToPdf