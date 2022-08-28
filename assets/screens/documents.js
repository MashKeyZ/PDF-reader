import { StyleSheet, Text, View,Image, Button, Dimensions,ScrollView,FlatList} from 'react-native'
import React from 'react'
import logo from '../images/logo.png'
import DocuComponent from '../components/docuComp'
import ButtonBody from '../components/buttonBody'
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
    marginTop:10,
    height: (Dimensions.get('window').height/2)-35,
    borderWidth: 1,
    width: (Dimensions.get('window').width),
    borderColor: '#cccccc',
  }
})

export default Documents