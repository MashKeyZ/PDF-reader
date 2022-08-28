import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ViewScreen from '../assets/screens/viewScreen'
import Home from '../assets/screens/documents'
import ImageConvert from '../assets/screens/imagePdfScreen'


 /* 
<Stack.Navigator>
  <Stack.Screen name="Home" initialRouteName="Home" component={Home}  />
  <Stack.Screen name="PDF Viewer" component={ViewScreen} />
  <Stack.Screen name="Image to PDF" component={ImageConvert} />
</Stack.Navigator>
)
*/
const screens = {
    Home: {
        screen: Home,
      },
      ViewScreen: {
        screen: ViewScreen,
      },
      ImageConvert: {
        screen: ImageConvert,
      },
    };
    
    // home stack navigator screens
    const HomeStack = createStackNavigator(screens);
  
export default createAppContainer(HomeStack);