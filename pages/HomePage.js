//Import libraries and dependencies
import React, { Component } from "react";
import { View, Text, StyleSheet, PermissionsAndroid } from "react-native";

//Import functions from util files
import { requestRecordPermission } from "../utils/Permissions";
import { postRequest } from "../utils/Connection";

//App Component
class HomePage extends Component {

    async componentDidMount() {

        //Get permission to use microphone
        requestRecordPermission();

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