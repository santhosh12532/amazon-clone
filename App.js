import React from "react";
import "react-native-gesture-handler";
import { SafeAreaView, StatusBar, useColorScheme, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Router from "./src/router";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  // return <Router />;
  return (
    <View style={backgroundStyle}>
      <StatusBar barstyle={isDarkMode ? "light-content" : "dark-content"} />
      <Router />
    </View>
  );
};

export default App;
