import { ImageBackground } from "react-native";
import React from "react";
import { Text, StyleSheet, View, SafeAreaView, Image } from "react-native";

const AboutTheAppScreen = ({
  route
}) => {
  const {
    item = {}
  } = route.params || {};
  return <SafeAreaView style={styles.container}>
      <View style={styles.imgScroller}>
        
        <Image style={styles.threeDots} source={require("./assets/3Dots.png")} />
      <ImageBackground style={styles.sSOevnzH} source={require("./Recipeful(2).png")} resizeMode="cover"></ImageBackground></View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item?.title}</Text>
        <Text style={styles.text}>{item?.instructions}</Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#fff"
  },
  imgScroller: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20
  },
  threeDots: {
    marginTop: 20
  },
  textContainer: {
    paddingHorizontal: 20
  },
  text: {
    fontSize: 14,
    textAlign: "justify",
    lineHeight: 18,
    marginVertical: 10
  },
  sSOevnzH: {
    width: 358,
    height: 82,
    position: "absolute",
    left: -1,
    top: -20,
    flexDirection: "row",
    flex: "1"
  }
});
export default AboutTheAppScreen;