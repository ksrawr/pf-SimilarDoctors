import Rebase from 're-base';
import firebase from "firebase";
import 'firebase/database';

// const DB_CONFIG = {
//   apiKey: (process.env.REACT_APP_FB_API_KEY),
//   authDomain: (process.env.REACT_APP_FB_AUTH_DOMAIN),
//   databaseURL: (process.env.REACT_APP_FB_DATABASE_URL),
//   projectId: (process.env.REACT_APP_FB_PROJECT_ID),
//   storageBucket: (process.env.REACT_APP_FB_STORAGE_BUCKET),
//   messagingSenderId: "488864452158"
// };


/**

	Firebase Database Rules Updated. Database Locked for Writing to.

*/

const DB_CONFIG = {
 	apiKey: "AIzaSyD0XrvHX0TAXJoHNg0G6Y8vgts33NY_waM",
  authDomain: "practicefusion-9ae82.firebaseapp.com",
  databaseURL: "https://practicefusion-9ae82.firebaseio.com",
  projectId: "practicefusion-9ae82",
  storageBucket: "practicefusion-9ae82.appspot.com",
  messagingSenderId: "488864452158"
};

const app = firebase.initializeApp(DB_CONFIG);
const base = Rebase.createClass(app.database());
const dbRef = firebase.database().ref();

export { base, dbRef }