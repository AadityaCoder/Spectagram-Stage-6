import * as React from 'react';
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import LoginScreen from "./screens/LoginScreen";
import LoadingScreen from './screens/LoadingScreen';
import DashboardScreen from './screens/DashboardScreen';

import * as firebase from "firebase";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}


const AppSwitchNavigator = createSwitchNavigator({
  LoginScreen: LoginScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen
})


export default function App() {
  return (
    <AppNavigator />
  );
}