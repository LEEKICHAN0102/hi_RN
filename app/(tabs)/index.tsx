import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <View style={styles.weather}>
        <Text style={styles.temp}>27</Text>
        <Text style={styles.description}>Sunny</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    flex: 1,
  },
  city: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  cityName: {
    fontSize: 68,
    fontWeight: 500,
  },
  weather: {
    flex: 3,
    alignItems: "center", 
  },
  temp: {
    marginTop: 50,
    fontSize: 68,
    fontWeight: 500,
  },
  description: {
    fontSize: 28,
  }
})