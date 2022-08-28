import React,{useState, useCallback} from 'react';
import { Button, View,StyleSheet, Alert,Text,Dimensions,DialogInput } from 'react-native';
import RNImageToPdf from 'react-native-image-to-pdf';
import DocumentPicker, { types } from 'react-native-document-picker';


const ImageToPdf = () => {
    const [fileResponse, setFileResponse] = useState([]);
    const [fileName,setFileName] = useState([]);
    const [visible, setVisible] = React.useState(false);
    const [pdfPath, setPdfPath] = React.useState('');
    
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
              /*  maxSize: { // optional maximum image dimension - larger images will be resized
                    width: 900,
                    height: Math.round(Dimensions.get('window').height / Dimensions.get('window').width * 900),
                },
                quality: .1, // optional compression paramter*/
            };
            const pdf = await RNImageToPdf.createPDFbyImages(options);
            setPdfPath(pdf.filePath) 
            console.log(pdf.filePath);
            saveDirectory();
        } catch(e) {
            console.log(e);
        }
    }

   async function  saveDirectory() {

        var RNFS = require('react-native-fs');
        var nam = fileName.split(".")[0]+'_PDF-studio';
        const dest = RNFS.DownloadDirectoryPath+'/'+nam+'.pdf'
        
       const prom = await RNFS.moveFile(pdfPath,dest)
            .then((name)=>{
             Alert.alert("File saved to documents!! "+dest)
                         
            })
            .catch((err) =>{
              return console.log( err)
            })
            const flushPromises = () => new Promise(resolve => setImmediate(resolve));
    }

    return (
        <>
           <View style={styles.container}>
                <Button title='Convert' style={styles.button} onPress={myAsyncPDFFunction}  />
                <Button title="Select 📑" onPress={handleDocumentSelection}/>
                <Text>{fileName}</Text>
           
           </View>
        </>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      
    },
    button:{
        position: 'absolute',
        width: '100%',
        marginLeft: 3,
        padding: 40,
    },
    progressView:{
        
        alignItems : 'center',
        backgroundColor : '#2196F3',
        padding : 5,
    },
    text:{
        color : 'white',
    }
});


  export default ImageToPdf