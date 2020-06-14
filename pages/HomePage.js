//Import libraries and dependencies
import React, { Component } from "react";
import { View, Text, StyleSheet, PermissionsAndroid } from "react-native";

//Import functions from util files
import { requestRecordPermission } from "../utils/Permissions";
import { postRequestCFR, postRequestModel } from "../utils/Connection";
import { startRecording, setUpRecorder } from "../utils/Audio";
import { getLocation } from "../utils/Geolocation";

//App Component
class HomePage extends Component {

    async componentDidMount() {

        //Get permission to use microphone
        requestRecordPermission();

        //Initialise recorder
        setUpRecorder();

        //Start recorder
        while (true) {
            startRecording();
        }

        //Init FormData to contain the data sent over POST
        const dataObj = new FormData();
        dataObj.append("data", {
            uri: '../audio.wav',
            type: 'audio',
            name: 'audio.wav'
        });
        dataObj.append({ 'test': 'testyboi' });


        data = {
            method: 'post',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: dataObj

        }

        //Send post request to model with data object
        const modelResult = postRequestModel(data);

        //Check if fall detected
        if (modelResult.fallProbability) {
            data = {};
            const cfrActivation = postRequestCFR(data);
        };
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

export default HomePage;