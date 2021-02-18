import { FirebaseCollection } from '../constants/collections';
import firebase from '../firebase/index';
import { IUser } from '../interfaces/user';

export const login = (email: string, password: string) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const logout = () => firebase.auth().signOut();

export const register = ({ email, password, firstName, lastName }: any) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(({ user }) => {
      const newUser: Omit<IUser, 'uid'> = {
        email,
        firstName,
        lastName,
      };
      return firebase
        .firestore()
        .collection(FirebaseCollection.Users)
        .doc(user?.uid)
        .set(newUser)
        .then(() =>
          user?.getIdTokenResult().then(() => ({
            ...newUser,
            uid: user.uid,
          }))
        );
    });
};
