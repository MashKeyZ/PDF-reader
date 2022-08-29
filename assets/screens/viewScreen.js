import React,{useState,useEffect} from 'react';
import { StyleSheet, Dimensions, View,Button,Text } from 'react-native';
import Pdf from 'react-native-pdf';
import Header from '../components/Header'

    function ViewScreen  (props)  {
        const {navigation} = props;
        //const source = { uri: 'http://engineering.nyu.edu/gk12/amps-cbri/pdf/Basic%20Electronics.pdf' };
        //const source = require('./test.pdf');  // ios only
        //const source = {uri:'bundle-assets://test.pdf' };
       // const source = {uri:'file:///sdcard/test.pdf'};
        //const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};
        //const source = {uri:"content://com.example.blobs/xxxxxxxx-...?offset=0&size=xxx"};
        //const source = {uri:"blob:xxxxxxxx-...?offset=0&size=xxx"};
        const [currentPage,setPage] = useState(1)
        const [totalPage,setNumberOfPages] = useState(1)
        const [PathPdf,setPathPdf] = useState('');

        useEffect(()=>{
            //setPathPdf('http://engineering.nyu.edu/gk12/amps-cbri/pdf/Basic%20Electronics.pdf')
            setPathPdf(navigation.state.params.path);
            console.log(PathPdf)
        },[])

        return (
            <>
            
            <View style={styles.container}>
                <Pdf 
                    trustAllCerts={false}
                    source={{
                      uri: PathPdf,
                      cache: true,
                    }}
                    
                    onPageChanged={(page,numberOfPages) => {
                        console.log(`Current page: ${page}`);
                        setPage(page);
                        setNumberOfPages(numberOfPages);
                    }}
                    onError={(error) => {
                        console.log(error);
                    }}
                    onPressLink={(uri) => {
                        console.log(`Link pressed: ${uri}`);
                    }}
                    style={styles.pdf}/>
                <View style={styles.progressView}>
                     <Text style={styles.text}>{currentPage}/{totalPage}</Text>
                </View>

            </View>
              </>
        )
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 0,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    },
    progressView:{
        display : 'flex',
    
        justifyContent: 'flex-end',
        padding : 5,
        position: 'absolute',
        right:0,
        top: 0,
        opacity: 0.5,
      
    },
    text:{
        color : 'white',
        backgroundColor : '#041a1d',
        bottom:0,
        padding:7,
        fontSize:13,
        borderRadius:10,
    }
});

export default ViewScreen