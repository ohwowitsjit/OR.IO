import geolocation from "@react-native-community/geolocation";

export function getLocation() {
    geolocation.getCurrentPosition(() = > {
        position => {
        return const location = JSON.stringify(position);
    };
})
};