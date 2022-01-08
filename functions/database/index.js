import {db} from '~/firebase';

/**
 * Function to collect the year and quarter from the date string.
 *
 * @param   {string}   date    The date to be converted.
 * @returns {object}           The object with quarter and year.
 */
export function getDateData(date) {
  const dt = new Date(date);
  const oneJan = new Date(dt.getFullYear(), 0, 1);
  const numberOfDays = Math.floor((dt - oneJan) / (24 * 60 * 60 * 1000));
  const result = Math.ceil((dt.getDay() + 1 + numberOfDays) / 7);

  return {
    result: result === 0 ? 1 : Math.floor(result / 13),
    year: dt.getFullYear()
  };
}

/**
 * Function to add the data to Firestore under the user's Id.
 *
 * @param {string} uid  The user's ID.
 * @param {object} data The data to add.
 */
export function addReceipt(uid, data) {
  const dates = getDateData(data?.date);
  const {quarter, year} = dates;
  const category = data.category;
  db.collection(`${uid}/receipt/${year}/q${quarter}/${category}`)
    .add(data)
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
}
// /**
//  */
// export function readReceipts() {
//   db.collection('users')
//     .get()
//     .then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         console.log(doc);
//         console.log(`${doc.id} => ${doc.data()}`);
//       });
//     });
// }
