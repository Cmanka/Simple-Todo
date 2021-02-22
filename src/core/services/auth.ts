import { FirebaseCollection } from '../constants/collections';
import { auth, firestore } from '../firebase/index';
import { IRegisterForm } from '../interfaces/register-form';
import { IUser } from '../interfaces/user';

export const login = (email: string, password: string): Promise<string> => {
  return auth
    .signInWithEmailAndPassword(email, password)
    .then(({ user }) => user.uid);
};

export const logout = (): Promise<void> => auth.signOut();

export const register = ({
  email,
  password,
  firstName,
  lastName,
}: IRegisterForm): Promise<IUser> => {
  return auth
    .createUserWithEmailAndPassword(email, password)
    .then(({ user }) => {
      const newUser: Omit<IUser, 'uid'> = {
        email,
        firstName,
        lastName,
      };
      return firestore
        .collection(FirebaseCollection.Users)
        .doc(user.uid)
        .set(newUser)
        .then(() =>
          user.getIdTokenResult().then(() => ({
            ...newUser,
            uid: user.uid,
          }))
        );
    });
};
