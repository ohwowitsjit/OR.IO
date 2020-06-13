//Import libraries and dependencies
import React, { Component } from "react";
import { View, Text, StyleSheet, PermissionsAndroid } from "react-native";
import { AudioRecord } from "react-native-audio-record";
import { axios } from "axios";
import { Buffer } from "buffer";

//Import functions from util files
import { requestRecordPermission } from "./utils/Permissions";

//Get connection info fromconfig.json
connConfig = require('./utils/config.json')

//Define Obj to handle 
var connObj = axios.create();
connObj.defaults.headers['Authorization'] = connConfig.clientKey


//Function to send POST requests
async postRequest(data){
  return await axios.post('https://' + connConfig.url, {
    "clientKey": connConfig.clientKey,
    "data": data
  })
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

    //Audio stream supposedly?
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
    fontFamily: Fonts.Muli,
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