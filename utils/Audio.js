import React from "react";
import AudioRecord from "react-native-audio-record";

//Define options object for AudioRecord
const options = {
    sampleRate: 16000,
    channels: 1,
    bitsPerSample: 16,
    wavFile: './audio.wav'
};

//Function to initialise audio recorder
export function setUpRecorder() {
    //Init AudioRecord
    return AudioRecord.init(options);
}

export async function startRecording() {
    AudioRecord.start();

    return await setTimeout(AudioRecord.stop(), 1500)
};
