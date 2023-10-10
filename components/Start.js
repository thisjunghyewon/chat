import { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const image = require("../assets/Background_Image.png");

const backgroundColors = {
  a: "#474056",
  b: "#757083",
  c: "#8A95A5",
  d: "#B9C6AE",
};

const Start = ({ navigation }) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState(backgroundColors.d);

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.appTitle}>App title</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder="Type your name here"
            placeholderTextColor="#757083"
          />
          <Text style={styles.textColorSelector}>Choose background color:</Text>
          <View style={styles.colorSelector}>
            <TouchableOpacity
              style={[
                styles.circle,
                color === backgroundColors.a && styles.selectedCircle,
                { backgroundColor: backgroundColors.a },
              ]}
              onPress={() => setColor(backgroundColors.a)}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.circle,
                color === backgroundColors.b && styles.selectedCircle,
                { backgroundColor: backgroundColors.b },
              ]}
              onPress={() => setColor(backgroundColors.b)}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.circle,
                color === backgroundColors.c && styles.selectedCircle,
                { backgroundColor: backgroundColors.c },
              ]}
              onPress={() => setColor(backgroundColors.c)}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.circle,
                color === backgroundColors.d && styles.selectedCircle,
                { backgroundColor: backgroundColors.d },
              ]}
              onPress={() => setColor(backgroundColors.d)}
            ></TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate("Chat", { name: name, color: color })
            }
          >
            <Text>Start chatting</Text>
          </TouchableOpacity>
        </View>
        {Platform.OS === "ios" ? (
          <KeyboardAvoidingView behavior="padding" />
        ) : null}
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "space-between",
    padding: "6%",
  },
  appTitle: {
    flex: 2,
    fontSize: 45,
    fontWeight: "600",
    color: "#FFFFFF",
    alignSelf: "center",
  },
  inputContainer: {
    flex: 1,
    backgroundColor: "#000000",
    padding: "6%",
    flexBasis: 160,
  },
  textInput: {
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    padding: 15,
    borderWidth: 1,
    borderColor: "#757083",
    marginTop: 15,
    marginBottom: 15,
  },
  textColorSelector: {
    fontSize: 16,
    fontWeight: "300",
    color: "#8A95A5",
  },
  colorSelector: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginTop: 10,
    marginBottom: 10,
  },
  selectedCircle: {
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  button: {
    alignContent: "center",
    backgroundColor: "#757083",
    padding: 10,
  },
});
export default Start;
