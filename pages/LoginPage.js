import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

class LoginPage extends Component {

    async componentDidMount() {
    };

    //Render components
    render() {
        return (
            <View style={styles.background} >
                <View>
                    <Text>LOGIN PAGE</Text>
                </View>

                <View>
                    <Text>Username</Text>
                    <View style={styles.usernameInput}>
                        <TextInput></TextInput>
                    </View>
                </View>

                <View>
                    <Text>Password</Text>
                    <View style={styles.passwordInput}>
                        <TextInput></TextInput>
                    </View>
                </View>

                <TouchableHighlight style={styles.submitWrapper}>
                    <Text>Submit</Text>
                </TouchableHighlight>
            </View>
        );
    };

};

//Styling of components
const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#FDFFFC",
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
    },
    usernameInput: {
        height: 40,
        width: 200,
        backgroundColor: "#F1D302",
    },
    passwordInput: {
        height: 40,
        width: 200,
        backgroundColor: "#F1D302"
    },
    submitWrapper: {
        backgroundColor: "#C52831",
        height: 40,
        width: 80,
        alignContent: 'center',
        justifyContent: 'center',
        margin: 30,
        borderRadius: 20
    }
});


export default LoginPage;