import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ViewScreen from '../assets/screens/viewScreen'
import Home from '../assets/screens/documents'
import ImageConvert from '../assets/screens/imagePdfScreen'
import scannerScreen from '../assets/screens/scannerScreen'
/*
const Stack = createStackNavigator();

export default function App(){
return(
    
        <Stack.Navigator>
            <Stack.Screen name="Home" initialRouteName="Home" component={Home}  />
            <Stack.Screen name="PDF Viewer" component={ViewScreen} />
            <Stack.Screen name="Image to PDF" component={ImageConvert} />
        </Stack.Navigator>
   
)

}
*/
const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            title: `PDF Studio`,
            headerLayoutPreset: 'center',
            headerTransitionPreset: 'uikit',
            cardShadowEnabled: true,
            headerStyle: 
            {   backgroundColor:'#ff471a',
            },
            headerTitleStyle: 
            { color:'white',
           
            },
            headerTitleContainerStyle:{
                alignItems: 'center',
            }
          }),
      },
      ViewScreen: {
        screen: ViewScreen,
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.params.name,
            
            headerTransitionPreset: 'uikit',
            cardShadowEnabled: true,
            headerStyle: 
            {   backgroundColor:'#ff471a',
            
            },
            headerTitleStyle: 
            { color:'white',
           
            },
            headerTitleContainerStyle:{
                
                fontSize:13,
            },
            headerTintColor:'white',
          }),
        
      },
      ImageConvert: {
        screen: ImageConvert,
        navigationOptions: ({ navigation }) => ({
            title: `Image to PDF`,
       
            headerTransitionPreset: 'uikit',
            cardShadowEnabled: true,
            headerStyle: 
            {   backgroundColor:'#ff471a',
            },
            headerTitleStyle: 
            { color:'white',
           
            },
            headerTitleContainerStyle:{
            
            },
            headerTintColor:'white',
          }),
      },
      scannerScreen: {
        screen: scannerScreen,
        navigationOptions: ({ navigation }) => ({
            title: `Scanner`,
       
            headerTransitionPreset: 'uikit',
            cardShadowEnabled: true,
            headerStyle: 
            {   backgroundColor:'#ff471a',
            },
            headerTitleStyle: 
            { color:'white',
           
            },
            headerTitleContainerStyle:{
            
            },
            headerTintColor:'white',
          }),
      },
    };
    
    // home stack navigator screens
    const HomeStack = createStackNavigator(screens);
  
export default createAppContainer(HomeStack);