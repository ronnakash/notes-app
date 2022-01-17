// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { GoogleAuthProvider, EmailAuthProvider, User  } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVmasxsi-Ij0QFyqPLTyYbab2VH-mXdmo",
  authDomain: "notes-app-69e89.firebaseapp.com",
  projectId: "notes-app-69e89",
  storageBucket: "notes-app-69e89.appspot.com",
  messagingSenderId: "888361755327",
  appId: "1:888361755327:web:f40088083d23c9aa971c0a"
};

const configUI : firebaseui.auth.Config=  {
  signInFlow: 'popupMode',
  signInSuccessUrl: '/notes',
  signInOptions: [
      {
        provider: EmailAuthProvider.PROVIDER_ID,
        signInMethod : EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD
      },
      GoogleAuthProvider.PROVIDER_ID
  ],
  callbacks: {
      signInSuccessWithAuthResult: (authResult, redirectURL) : boolean=> {
          console.log(authResult);
          return false;
      },
      signInFailure: () => {}
  },
}


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);



export default { auth , configUI};