//Import all libraries and dependencies
import React, { Component } from "react";
import { View, Text, StyleSheet, PermissionsAndroid } from "react-native";
import { AudioRecord } from "react-native-audio-record";
import { axios } from "axios";
import { Buffer } from "buffer";

//Cos Permission alr set in settings, no need to ask for permission
//Permission being in settings means it'll always returned permission granted,even when cancel pressed
//This functionailty just remains here, in case there is a need to ask
const requestRecordPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      {
        title: "OR.IO Permissions",
        message:
          "We need to use your microphone " +
          "to do what we do.",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("RECORD AUDIO ENABLED");
    } else {
      console.log("DENIED");
    }
  } catch (err) {
    console.warn(err);
  }
};

//App Component
class App extends Component {

  async componentDidMount() {
    //Get permission to use microphone
    requestRecordPermission();

    //Define options object for AudioRecord
    const options = {
      sampleRate: 16000,
      channels: 1,
      bitsPerSample: 16,
      wavFile: 'audio.wav'
    };

    //Init AudioRecord
    AudioRecord.init(options);

    AudioRecord.on('data', data => {
      const chunk = Buffer.from(data, 'base64');
      console.log('chunk size', chunk.byteLength);
    });

    console.log('Pass');

  };




  //Render app components
  render() {
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
  },
  //Logo View style
  logo: {
    marginLeft: 0,
    color: "#C52831",
    fontSize: 80,
    padding: 0,
  },
  //Styling for recording text's wrapper
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