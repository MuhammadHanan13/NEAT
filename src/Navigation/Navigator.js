import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { connect } from 'react-redux';

import Login from '../AUTH/Login';
import Register from '../AUTH/Register';
// import HomeAdmin from '../Screen/HomeAdmin';
// import HomeCashier from '../Screen/HomeCashier';
// import  from '../Screen/'
// import  from '../Screen/'
// import  from '../Screen/'
// import  from '../Screen/'
// import  from '../Screen/'
// import  from '../Screen/'
// import  from '../Screen/'
// import  from '../Screen/'
// import  from '../Screen/'
// import  from '../Screen/'
// import  from '../Screen/'
// import  from '../Screen/'

const Stack = createNativeStackNavigator();

function Navigator(){
  return(
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        {/* <Stack.Screen name="HomeAdmin" component={HomeAdmin}/>
        <Stack.Screen name="HomeCashier" component={HomeCashier}/>
        <Stack.Screen name="" component={}/>
        <Stack.Screen name="" component={}/>
        <Stack.Screen name="" component={}/>
        <Stack.Screen name="" component={}/>
        <Stack.Screen name="" component={}/>
        <Stack.Screen name="" component={}/>
        <Stack.Screen name="" component={}/>
        <Stack.Screen name="" component={}/>
        <Stack.Screen name="" component={}/>
        <Stack.Screen name="" component={}/>
        <Stack.Screen name="" component={}/>
        <Stack.Screen name="" component={}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator
