import Rebase from 're-base';
import firebase from "firebase";
import 'firebase/database';

const DB_CONFIG = {
  apiKey: (process.env.REACT_APP_FB_API_KEY),
  authDomain: (process.env.REACT_APP_FB_AUTH_DOMAIN),
  databaseURL: (process.env.REACT_APP_FB_DATABASE_URL),
  projectId: (process.env.REACT_APP_FB_PROJECT_ID),
  storageBucket: (process.env.REACT_APP_FB_STORAGE_BUCKET),
  messagingSenderId: "488864452158"
};

const app = firebase.initializeApp(DB_CONFIG);
const base = Rebase.createClass(app.database());
const dbRef = firebase.database().ref();

export { base, dbRef }