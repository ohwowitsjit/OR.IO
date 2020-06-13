import React from "react";
import { PermissionsAndroid } from "react-native";

//Cos Permission alr set in settings, no need to ask for permission
//Permission being in settings means it'll always returned permission granted,even when cancel pressed
//This functionailty just remains here, in case there is a need to ask


export function requestRecordPermission = async () => {
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