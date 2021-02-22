import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { fbconfig } from '../constants/config';

firebase.initializeApp(fbconfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export default firebase;
