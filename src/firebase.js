import firebase from "firebase/app";
import "firebase/firestore";
var firebaseConfig = {
    apiKey: "***REMOVED***",
    authDomain: "***REMOVED***",
    projectId: "***REMOVED***",
    storageBucket: "***REMOVED***.appspot.com",
    messagingSenderId: "***REMOVED***",
    appId: "1:***REMOVED***:web:76a04169e44e47bf636b1b",
    measurementId: "***REMOVED***"
};
// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 export default firebase