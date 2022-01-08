import * as Firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDxD-7UUKENbZOQ6W0G-8wQVdC2fc6TsgA',
  authDomain: 'budgetauth.firebaseapp.com',
  databaseURL: 'https://budgetauth-default-rtdb.firebaseio.com',
  projectId: 'budgetauth',
  storageBucket: 'budgetauth.appspot.com',
  messagingSenderId: '224573192949',
  appId: '1:224573192949:web:18556d4665848e093da3bc',
  measurementId: 'G-T0HT421TD0'
};

// Initialize Firebase
let app;

if (Firebase.apps.length === 0) {
  app = Firebase.initializeApp(firebaseConfig);
} else {
  app = Firebase.app();
}
export {app};
export const auth = Firebase.auth();

export const db = Firebase.firestore();

/**Start Data Population */
// db.collection('user/receipt/2022/q1/food')
//   .add({
//     date: 1 / 1 / 2022,
//     amount: 14.14,
//     items: 'bagels',
//     memo: 'Bagel Bobs'
//   })
//   .then((docRef) => {
//     console.log('Document written with ID: ', docRef.id);
//   })
//   .catch((error) => {
//     console.error('Error adding document: ', error);
//   });

// db.collection('user/receipt/2022/q1/nonessential')
//   .add({
//     date: 1 / 2 / 2022,
//     amount: 15.64,
//     items: 'modelo',
//     memo: 'Morton Williams'
//   })
//   .then((docRef) => {
//     console.log('Document written with ID: ', docRef.id);
//   })
//   .catch((error) => {
//     console.error('Error adding document: ', error);
//   });

// db.collection('user/receipt/2022/q2/grocery')
//   .add({
//     date: 3 / 15 / 2022,
//     amount: 23.56,
//     items: 'onions, tomatoes, limeade',
//     memo: 'Morton Williams'
//   })
//   .then((docRef) => {
//     console.log('Document written with ID: ', docRef.id);
//   })
//   .catch((error) => {
//     console.error('Error adding document: ', error);
//   });

// db.collection('user/receipt/2022/q3/loan')
//   .add({
//     date: 8 / 2 / 2022,
//     amount: 726.43,
//     items: 'UAS',
//     memo: 'UAS Connect'
//   })
//   .then((docRef) => {
//     console.log('Document written with ID: ', docRef.id);
//   })
//   .catch((error) => {
//     console.error('Error adding document: ', error);
//   });

// db.collection('user/receipt/2022/q1/overhead')
//   .add({
//     date: 2 / 1 / 2022,
//     amount: 2250,
//     items: 'rent',
//     memo: 'Devito Real Estate'
//   })
//   .then((docRef) => {
//     console.log('Document written with ID: ', docRef.id);
//   })
//   .catch((error) => {
//     console.error('Error adding document: ', error);
//   });

// db.collection('user/receipt/2022/q2/savings')
//   .add({
//     date: 7 / 12 / 2022,
//     amount: 100,
//     items: 'savings',
//     memo: 'TD Bank'
//   })
//   .then((docRef) => {
//     console.log('Document written with ID: ', docRef.id);
//   })
//   .catch((error) => {
//     console.error('Error adding document: ', error);
//   });

// db.collection('user/receipt/2022/q3/entertainment')
//   .add({
//     date: 10 / 9 / 2022,
//     amount: 5.99,
//     items: 'Venom2',
//     memo: 'Amazon Prime'
//   })
//   .then((docRef) => {
//     console.log('Document written with ID: ', docRef.id);
//   })
//   .catch((error) => {
//     console.error('Error adding document: ', error);
//   });
// db.collection('user/receipt/2022/q3/entertainment')
//   .add({
//     date: 10 / 9 / 2022,
//     amount: 5.99,
//     items: 'Venom2',
//     memo: 'Amazon Prime'
//   })
//   .then((docRef) => {
//     console.log('Document written with ID: ', docRef.id);
//   })
//   .catch((error) => {
//     console.error('Error adding document: ', error);
//   });
/**End Data Population */
