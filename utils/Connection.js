//Defining parameters
modelApiUrl = 'http://34.87.53.98:5000/predict'
cfrApiUrl = '';



//Generic function for post requests
async function postRequest(url, data) {
    try {
        const apiVal = await fetch(url, data)
            .then(response => {
                return response.json();
            }).then(responseData => {
                return responseData;
            })

        console.log(apiVal);
    } catch (e) {
        console.log(e);
    }
}

//Function to send data as a post request to the myResponder interface
export function postRequestCFR(data) {
    return postRequest(cfrApiUrl, data);
};

//Function to send data as a post request to the model
export function postRequestModel(data) {
    return postRequest(modelApiUrl, data);
};