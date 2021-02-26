import { FirebaseCollection } from './../constants/collections';
import { ITodo } from './../interfaces/todo';
import { firestore } from '../firebase/index';

export const getTodoList = (uid: string): Promise<ITodo[]> =>
  firestore
    .collection(FirebaseCollection.Todo)
    .doc(uid)
    .get()
    .then((doc) => doc.data().todoList);

export const getTodoById = (id: string, uid: string): Promise<ITodo> =>
  firestore
    .collection(FirebaseCollection.Todo)
    .doc(uid)
    .get()
    .then((doc) => doc.data().todoList.find((item: ITodo) => item.id === id));

export const addTodo = async (todo: ITodo, uid: string): Promise<void> => {
  const res = await getCollection(uid);
  if (!res.data()) {
    return firestore
      .collection(FirebaseCollection.Todo)
      .doc(uid)
      .set({ todoList: [todo] });
  }
  return firestore
    .collection(FirebaseCollection.Todo)
    .doc(uid)
    .set({ todoList: [...res.data().todoList, todo] });
};

export const removeTodo = async (
  todoId: string,
  uid: string
): Promise<void> => {
  const res = await getCollection(uid);
  return firestore
    .collection(FirebaseCollection.Todo)
    .doc(uid)
    .update({
      todoList: res.data().todoList.filter((item: ITodo) => item.id !== todoId),
    });
};

export const toggleTodo = async (
  todoId: string,
  uid: string
): Promise<void> => {
  const res = await getCollection(uid);
  return firestore
    .collection(FirebaseCollection.Todo)
    .doc(uid)
    .update({
      todoList: res
        .data()
        .todoList.map((item: ITodo) =>
          item.id === todoId ? { ...item, completed: !item.completed } : item
        ),
    });
};

const getCollection = (uid: string) => {
  return firestore.collection(FirebaseCollection.Todo).doc(uid).get();
};
