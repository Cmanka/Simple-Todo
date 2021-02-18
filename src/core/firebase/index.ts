import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { fbconfig } from '../constants/config';

firebase.initializeApp(fbconfig);

export default firebase;
