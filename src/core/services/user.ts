import { IUser } from '../interfaces/user';
import { firestore } from '../firebase/index';
import { FirebaseCollection } from '../constants/collections';
import firebase from '../firebase/index';
import 'firebase/storage';

export const getUser = (userId: string): Promise<IUser> =>
  firestore
    .collection(FirebaseCollection.Users)
    .doc(userId)
    .get()
    .then((snapshot) => snapshot.data() as IUser)
    .then((data) => ({
      ...data,
      uid: userId,
    }));

export const getUserAvatar = (uid: string): Promise<string> =>
  firebase.storage().ref(`user/${uid}/profile-picture`).getDownloadURL();

export const updateUserAvatar = (uid: string, file: File) =>
  firebase.storage().ref(`user/${uid}/profile-picture`).put(file);
