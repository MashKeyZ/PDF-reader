import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';

import Navigate from './routes/homeStack'
import ImageConvert from './assets/screens/imagePdfScreen'
const App = () => {
  
  return (
  
       <Navigate/>
    
     
  )
}

/*
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}*/


export default App