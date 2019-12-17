import firebase from 'firebase'
import 'firebase/storage'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: process.env.FIREBASE_API,   //"AIzaSyAzgjtvTRckZojic2wFEOwV2sMOTIgIT7o",
    authDomain: "sei-project4.firebaseapp.com",
    databaseURL: "https://sei-project4.firebaseio.com",
    projectId: "sei-project4",
    storageBucket: "sei-project4.appspot.com",
    messagingSenderId: process.env.FIREBASE_MESSAGE_ID, //"197890365238",
    appId: "1:197890365238:web:96150e118fd4ffcdedc597",
    measurementId: "G-YK90CCT0SC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
export {
    storage, firebase as default
}