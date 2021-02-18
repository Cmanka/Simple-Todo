import { IUser } from '../interfaces/user';
import firebase from '../firebase/index';
import { FirebaseCollection } from '../constants/collections';

export const getUser = (userId: string): Promise<IUser> =>
  firebase
    .firestore()
    .collection(FirebaseCollection.Users)
    .doc(userId)
    .get()
    .then((snapshot) => snapshot.data() as IUser)
    .then((data) => ({
      ...data,
      uid: userId,
    }));
