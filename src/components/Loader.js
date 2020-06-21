import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Loader = () => (
  <View style={styles.container}>
    <Image style={styles.image} source={require("../../assets/loading.gif")} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default Loader;
