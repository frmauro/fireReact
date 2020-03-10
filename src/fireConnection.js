import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


    // Your web app's Firebase configuration
    let firebaseConfig = {
        apiKey: "AIzaSyDzvIVbjQyLtmNfRSsVoKFE6siAvLJNll4",
        authDomain: "reactapp-68414.firebaseapp.com",
        databaseURL: "https://reactapp-68414.firebaseio.com",
        projectId: "reactapp-68414",
        storageBucket: "reactapp-68414.appspot.com",
        messagingSenderId: "288792218326",
        appId: "1:288792218326:web:b7a13bd46ee2aa07c49777",
        measurementId: "G-5F2BJTZH7X"
      };
  
      //if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      //}
      // Initialize Firebase

      export default firebase;