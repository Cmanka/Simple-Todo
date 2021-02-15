import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyCq5i_-pm7FYbz9AyKcLSrgjPeu6285tq0',
  authDomain: 'simple-todo-3e9cf.firebaseapp.com',
  projectId: 'simple-todo-3e9cf',
  storageBucket: 'simple-todo-3e9cf.appspot.com',
  messagingSenderId: '790125719108',
  appId: '1:790125719108:web:b44862aea9c4f193271611',
  measurementId: 'G-5EVF3CZR9F',
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
