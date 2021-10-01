
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const stack=createStackNavigator();

function ScreenA(){
  return(
    <View>
      <Text>ScreenA</Text>
    </View>
  )
}

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Screen A' component={ScreenA}>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;