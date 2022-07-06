import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Login() {
  // export default class Login extends React.Component {
  //   state = {
  //     email: "",
  //     password: "",
  //   };
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const onLoginPressed = () => {
    if (email == "singlanitin@gmail.com" && password == "password") {
      console.log("Successful");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.circle}>
        <Text></Text>
      </TouchableOpacity>
      <Text style={styles.logo}>Login</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="black"
          label="Email"
          value={email.value}
          onChangeText={(text) => setEmail({ value: text })}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password."
          placeholderTextColor="black"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: "" })}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text onPress={onLoginPressed} style={styles.loginText1}>
          LOGIN
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.loginText2}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    position: "absolute",
    top: 40,
    right: 20,
    // marginTop:,
    height: 70,
    width: 70,
    backgroundColor: "blue",
    borderRadius: 50,
    marginBottom: 10,
  },
  arrow: {
    border: "black",
    backgroundColor: "black",
    width: "50",
    borderWidth: "0 3 3 0",
    // display: inline-block;
    padding: 3,
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "blue",
    marginTop: 150,
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    // backgroundColor: "#465881",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "black",
  },
  forgot: {
    color: "black",
    fontSize: 11,
  },
  loginBtn: {
    width: "40%",
    backgroundColor: "blue",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText1: {
    color: "white",
  },
  loginText2: {
    color: "black",
  },
});
// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";

// export default function Login() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up Login.js to start working on your Login!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
