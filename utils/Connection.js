//Import libraries
import React from "react";
import axios from "axios";

//Function to initialise a connection on axios
function getConnection() {
    connConfig = require('./config.json')
    conn = axios.create();
    conn.defaults.headers['Authorization'] = connConfig.clientKey;
    conn.defaults.baseURL = "https://" + connConfig.url;
};

//Function to makea a post request
export function postRequest(data) {
    async () => {
        conn = getConnection();
        return await conn.post(data)
    };
};
