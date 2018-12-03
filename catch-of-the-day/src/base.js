import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD7FmTJ0_ni_-WYrVPddVOH5cM5T6Tl1As",
  authDomain: "catch-of-the-day-f785d.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-f785d.firebaseio.com"
});

const base = Rebase.createClass(firebase.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
