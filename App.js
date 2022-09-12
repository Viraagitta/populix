import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./src/store";
import Navigator from "./src/navigation/Navigator";

export default function App() {
  return (
    <Provider store={store}>
      {/* <NavigationContainer> */}
      <View style={styles.container}>
        <StatusBar style={"light"} />
        <Navigator />
        {/* <HomeScreen /> */}
        {/* <LoginScreen /> */}
      </View>
      {/* </NavigationContainer> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
