import { initializeApp } from 'firebase/app'

// Use your config values here.
const app = initializeApp({
    apiKey: "***REMOVED***",
    authDomain: "***REMOVED***",
    projectId: "***REMOVED***",
    storageBucket: "***REMOVED***.appspot.com",
    messagingSenderId: "***REMOVED***",
    appId: "1:***REMOVED***:web:6d55f4105b2fcc501004ec",
    measurementId: "***REMOVED***"
});

export {
    app
}