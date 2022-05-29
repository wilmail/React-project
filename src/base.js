import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
   apiKey: "AIzaSyCzXi3G0Q3APop5Aq-nlHzbHB4XJFbzA4E",
   authDomain: "chicken-house-ac4cc.firebaseapp.com",
   databaseURL: "https://chicken-house-ac4cc-default-rtdb.firebaseio.com",    
})

const base = Rebase.createClass(firebaseApp.database());

//This is a named export
export { firebaseApp };

//This is a default export
export default base;