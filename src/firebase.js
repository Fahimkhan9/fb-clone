import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBGhWUGdYvGK7O0_Y-OxmBRwNYUcGEqyIc",
    authDomain: "facebook-clone-f244e.firebaseapp.com",
    databaseURL: "https://facebook-clone-f244e.firebaseio.com",
    projectId: "facebook-clone-f244e",
    storageBucket: "facebook-clone-f244e.appspot.com",
    messagingSenderId: "22603520783",
    appId: "1:22603520783:web:ec712727fbc1dba1d9bc7a",
    measurementId: "G-Q32EHR20RL"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig)

  const auth=  firebaseapp.auth()

  const db = firebase.firestore()

const provider =  new firebase.auth.GoogleAuthProvider()

export {auth,provider}
export default db