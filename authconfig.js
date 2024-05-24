const msalConfig = {
    auth: {
        clientId: "882634e3-f4e1-4bff-ac8a-5cf94ee62b65", // Your client ID
        authority: "https://login.microsoftonline.com/0d1c3174-59ce-422b-aee1-deeeb6e5a320", // Your tenant ID
        redirectUri: "http://localhost:3000" // Your redirect URI
    },
    cache: {
        cacheLocation: "sessionStorage", // Configure where to store cache
        storeAuthStateInCookie: false // Set to true if you have issues on IE11 or Edge
    }
};

const loginRequest = {
    scopes: ["User.Read"] // Define the scopes you need
};
