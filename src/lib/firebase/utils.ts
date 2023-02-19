import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { firestore } from ".";

export const createTransactionDocument = async (userUid: string) => {
  const transactionCol = collection(firestore, "transaction");
  const data = {
    date: serverTimestamp(),
    balance: 0,
    avgDailyExpenses: 0,
    avgMonthlyExpenses: 0,
    debt: 0,
    expenseCategories: ["Joey", "Health", "Food"],
    incomeCategories: ["Salary"],
    expenseHistory: [],
    incomeHistory: [],
  };
  const document = doc(transactionCol, userUid);
  await setDoc(document, data);
};
