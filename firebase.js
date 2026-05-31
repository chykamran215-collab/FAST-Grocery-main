const firebaseConfig = {
  apiKey: "AIzaSyAHqRScSfPxa4Td7qNMCxVI33lUUBSxDaY",
  authDomain: "fast-grocery-main.firebaseapp.com",
  projectId: "fast-grocery-main",
  storageBucket: "fast-grocery-main.firebasestorage.app",
  messagingSenderId: "460861797881",
  appId: "1:460861797881:web:600da3e16a68f80caeb928",
  measurementId: "G-P8672BMNM6"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
