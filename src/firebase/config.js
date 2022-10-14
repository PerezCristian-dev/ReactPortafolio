import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { FirebaseApp } from "./config";

const firebaseConfig = {
  apiKey: "AIzaSyDHmSmTV9EF6m7d5zENFa4GKHvwdu3QYTU",
  authDomain: "myportafolio-35f41.firebaseapp.com",
  projectId: "myportafolio-35f41",
  storageBucket: "myportafolio-35f41.appspot.com",
  messagingSenderId: "613525505294",
  appId: "1:613525505294:web:fbbd4739e668da4b66c35f",
};

export const FirebaseApp = initializeApp(firebaseConfig);
//   export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp);

export async function getCities() {
  const citiesCol = collection(FirebaseDB, `RVsOMi6pcOM6EWULRBL8`);
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}
