import {
  addDoc,
  collection,
  getDoc,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { firestore } from "@/lib/firebase/index";

export const createTransactionDocument = async (userUid: string) => {
  const transactionCol = collection(firestore, "transaction");
  const data = {
    date: serverTimestamp(),
    amount: 0,
    type: 0,
    source: 0,
  };
  const document = doc(transactionCol, userUid);
  await setDoc(document, data);
};
