import 'react-native-gesture-handler';
import React from 'react'
import {Text,View,StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/SignUp'
import Detail from './components/Detail'
import Flutter from './components/Flutter'
import {NotifierWrapper} from 'react-native-notifier'
import ButtonList from './components/Items';




const App=()=>{

  const stack=createStackNavigator();

  return(
    <NotifierWrapper>
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={Home} options={{'title':"Home Screen"}}/>
        <stack.Screen name="Login" component={Login} options={{'title':"Login Page"}}/>
        <stack.Screen name="SignUp" component={Signup} options={{'title':"SignUp"}}/>
        <stack.Screen name="Detail" component={Detail} options={{'title':"Detail Screen"}}/>
        <stack.Screen name="Flutter" component={Flutter} options={{'title':"Flutter"}}/>
        <stack.Screen name="Items" component={ButtonList} options={{'title':"Button List"}}/>
      </stack.Navigator>
    </NavigationContainer>
    </NotifierWrapper>
  )
}

const styles=StyleSheet.create({
   button:{
    backgroundColor: "red",
    padding: 20,
    fontWeight: "200",
    fontSize: 30,
    color: "white",
    width:400
   }
})

export default App