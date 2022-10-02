import { StyleSheet, Text, View,Image, Button, Dimensions,ScrollView,FlatList} from 'react-native'
import React,{useEffect,useState} from 'react'
import logo from '../images/logo.png'
import DocuComponent from '../components/docuComp'
import ButtonBody from '../components/buttonBody'
import RNFS from 'react-native-fs'
import Permissions from 'react-native-permissions';

const Documents = ({navigation}) => {

  const data = [
    {
    id : '1',
    name : 'Results.pdf'
  },{
        id: '2',
        name : 'Statement.pdf',
      }, {
        id: '3',
        name : 'Academic Record.pdf',
      }, {
        id: '4',
        name : 'new Document.pdf',
      }
  ]

    // collecting data from device
   
    const [getAllPath, setAllPath] = useState([])
    const [bookList, setBookList] = useState([]);
  
    useEffect(() => {
      Test();
    }, []);
  
 
  
    async function Test(){
      let list2 =[]

      //Get all pdf files from Downloads Direcory
      console.log("Downloads directory : \n\n")
      await RNFS.readDir(RNFS.DownloadDirectoryPath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
      .then((result) => {
        //console.log('GOT RESULT New', result);
        result.forEach((item) =>{
          console.log("Item name \n"+item.name)
          if (item.name.endsWith('.pdf')) {
            console.log("Item name "+item.name);
            setAllPath([...getAllPath, item])
            console.log("\nItem Added !!! ");
           }
          else if (item.isDirectory()) {
           
            RNFS.readDir(item.path)
              .then(result => {
                
                list2 = result.filter((item) => item.name.endsWith('.pdf'))
                console.log("Item name "+list2);
                setAllPath([...getAllPath, ...list2])
                console.log("\nItem Added !!! ");
              }).catch((error) => {
                console.log(error)
              })
          }

        })
      })
      .catch((err) => {
        console.log(err.message, err.code);
      });

      console.log("Documents directory : \n\n")

      await RNFS.readDir(RNFS.DocumentDirectoryPath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
      .then((result) => {
        //console.log('GOT RESULT New', result);
        result.forEach((item) =>{
          console.log("Item name \n"+item.path)
          if (item.name.endsWith('.pdf')) {
            console.log("Item name "+item.path);
            setAllPath([...getAllPath, item])
            console.log("\nItem Added !!! ");
           }
          else if (item.isDirectory()) {
           
            RNFS.readDir(item.path)
              .then(result => {
                
                list2 = result.filter((item) => item.name.endsWith('.pdf'))
                console.log("Item name "+list2);
                setAllPath([...getAllPath, ...list2])
                console.log("\nItem Added !!! ");
              }).catch((error) => {
                console.log(error)
              })
          }

        })
      })
      .catch((err) => {
        console.log(err.message, err.code);
      });
    }

  const handleReadClick = () => {
      navigation.push('ViewScreen')
  }
  
  return (
    <>
    <View style={styles.container}>
      <View style={styles.subTitle}>
        <Text style={styles.textTitle}>Recently Opened </Text>
      </View> 
      <View style={styles.compContainter}>
        <FlatList data={data}
          renderItem={DocuComponent}
          keyExtractor={(item,index )=>item.id}
          horizontal={true}
          />   
       </View>
       <View style={styles.body}>
          <ButtonBody navigation={navigation}/>

       </View>
   </View>
    </>
  )
}

const styles = StyleSheet.create({
  subTitle:{
    width: Dimensions.get('window').width-10, 
    marginTop: 15,  
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,

  },
  textTitle:{
    fontWeight: 'bold',
    color: '#a6a6a6',
    width: '100%',
    position: 'absolute',
    borderRadius: 25,
  },
  container:{
    flex: 1,
    backgroundColor: '#fff',
  },
  compContainter:{
    height: (Dimensions.get('window').height/4)+25 ,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
    paddingVertical: 10,
    
  },
  body:{
    display: 'flex',
    marginTop:10,
    height: (Dimensions.get('window').height/2),
    width: (Dimensions.get('window').width),
    justifyContent: 'center',
  }
})

export default Documents