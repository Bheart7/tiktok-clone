import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyChfFg-S6puf4urI3yRrmpmQjdd7fenq0Q',
  authDomain: 'tiktok-clone-857d4.firebaseapp.com',
  databaseURL: 'https://tiktok-clone-857d4.firebaseio.com',
  projectId: 'tiktok-clone-857d4',
  storageBucket: 'tiktok-clone-857d4.appspot.com',
  messagingSenderId: '865675284923',
  appId: '1:865675284923:web:060faf886c93f8a023b49e',
  measurementId: 'G-1MLWRS83NC',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
