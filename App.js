//Import all libraries and dependencies
import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
//import AudioRecord from "react-native-audio-record";
//import { check, PERMISSIONS, RESULTS } from 'react-native-permissions';

//App Component
const App = () => {

  //Define options object for AudioRecord
  const options = {
    sampleRate: 16000,
    channels: 1,
    bitsPerSample: 16,
    wavFile: 'audio.wav'
  };
  //Init AudioRecord
  //AudioRecord.init(options)




  //Render app components
  return (
    <View style={styles.background} >
      <View>
        <Text style={styles.logo}>OR.IO</Text>
      </View>
      <View style={styles.recArea}>
        <Text style={styles.centerText}>RECORDING...</Text>
      </View>
    </View>
  );
};

//Styling of components
const styles = StyleSheet.create({
  //Styling for the background View component
  background: {
    flex: 1,
    backgroundColor: "#FDFFFC",
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  }, and
  //Logo View style
  logo: {
    marginLeft: 0,
    color: "#C52831",
    fontSize: 80,
    padding: 0,
  },
  recArea: {
    backgroundColor: "#F1D302",
    minHeight: 40,
    minWidth: 130,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100 / 2,
  },
  centerText: {

  },
});

//Export App
export default App;