//importing the two screens
import Start from "./components/Start";
import Chat from "./components/Chat";

//importing react navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//creating the navigator
const Stack = createNativeStackNavigator();

const App = () => {
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

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {(props) => <Chat db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
