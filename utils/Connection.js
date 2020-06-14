//Import libraries
import React from "react";
import axios from "axios";

//Function to initialise a connection on axios
function getConnection() {
    connConfig = require('./config.json')
    conn = axios.create();
    console.log(connConfig);
    conn.defaults.headers['Authorization'] = connConfig.clientKey;
    conn.defaults.baseURL = "https://" + connConfig.url;
};

//Function to makea a post request
export function postRequest(data) {
    () => {
        result = axios.post({
            url: "https:/'www.google.com",
            data: "audioFile"
        });
        console.log('REQ');
        console.log(result);
        return result;
    };
};
