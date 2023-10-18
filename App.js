//importing the two screens
import Start from "./components/Start";
import Chat from "./components/Chat";

//importing react navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  disableNetwork,
  enableNetwork,
} from "firebase/firestore";

import { getStorage } from "firebase/storage";

// useNetInfo, which returns the latest value of the network connection state and is automatically updated whenever the connection changes.
import { useNetInfo } from "@react-native-community/netinfo";

import { useEffect } from "react";
import { LogBox, Alert } from "react-native";
LogBox.ignoreLogs(["AsyncStorage has been extracted from"]);

//creating the navigator
const Stack = createNativeStackNavigator();

//useNetInfo() to define a new state that represents the network connectivity status
const App = () => {
  const connectionStatus = useNetInfo();

  //The web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD0TfXaokjpcVNOX5LPWaIZWSwqV4wtFA4",

    authDomain: "chat-to-that-92687.firebaseapp.com",

    projectId: "chat-to-that-92687",

    storageBucket: "chat-to-that-92687.appspot.com",

    messagingSenderId: "213164044513",

    appId: "1:213164044513:web:882476ad7d13b9e13247a0",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Firestore Database handler
  const db = getFirestore(app);

  // Initialize Firebase Storage handler
  const storage = getStorage(app);

  // throwing an error if no internet
  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert("Connection Lost!");
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]); //This means that if this value changes, the useEffect code will be re-executed

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {(props) => (
            <Chat
              isConnected={connectionStatus.isConnected}
              db={db}
              storage={storage}
              {...props}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
