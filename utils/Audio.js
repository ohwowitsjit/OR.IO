import React from "react";
import { AudioRecord } from "react-native-audio-record";

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
//AudioRecord.on('data', data => {
// const chunk = Buffer.from(data, 'base64');
//  console.log('chunk size', chunk.byteLength);
//  res = postRequest(chunk);
//});

AudioRecord.start();