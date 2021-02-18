import { IUser } from './../interfaces/user';
import { FirebaseCollection } from './../constants/collections';
import { ITodo } from './../interfaces/todo';
import firebase from '../firebase/index';

export const getTodoList = (uid: string): Promise<ITodo[]> =>
  firebase
    .firestore()
    .collection(FirebaseCollection.Todo)
    .doc(uid)
    .get()
    .then((doc) => doc.data()?.todoList);

export const getTodoById = (id: string, uid: string): Promise<ITodo> =>
  firebase
    .firestore()
    .collection(FirebaseCollection.Todo)
    .doc(uid)
    .get()
    .then((doc) => doc.data()?.todoList.find((item: ITodo) => item.id === id));

export const addTodo = async (
  todo: ITodo,
  { uid }: IUser
): Promise<ITodo | void> => {
  const res = await getCollection(uid);

  if (!res.data()) {
    return firebase
      .firestore()
      .collection(FirebaseCollection.Todo)
      .doc(uid)
      .set({ todoList: [todo] });
  }
  return firebase
    .firestore()
    .collection(FirebaseCollection.Todo)
    .doc(uid)
    .set({ todoList: [...res.data()?.todoList, todo] });
};

export const removeTodo = async (
  todo: ITodo,
  { uid }: IUser
): Promise<void> => {
  const res = await getCollection(uid);
  return firebase
    .firestore()
    .collection(FirebaseCollection.Todo)
    .doc(uid)
    .update({
      todoList: res
        .data()
        ?.todoList.filter((item: ITodo) => item.id !== todo.id),
    });
};

export const toggleTodo = async (
  todo: ITodo,
  { uid }: IUser
): Promise<void> => {
  const res = await getCollection(uid);
  return firebase
    .firestore()
    .collection(FirebaseCollection.Todo)
    .doc(uid)
    .update({
      todoList: res
        .data()
        ?.todoList.map((item: ITodo) =>
          item.id === todo.id ? { ...todo, completed: !item.completed } : item
        ),
    });
};

const getCollection = (uid: string) => {
  return firebase
    .firestore()
    .collection(FirebaseCollection.Todo)
    .doc(uid)
    .get();
};
