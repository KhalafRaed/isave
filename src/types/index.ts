export interface UserDocumentType {
  balance: number;
  debt: number;
  avgMonthlyExpenses: number;
  avgDailyExpenses: number;
  expenseCategories: string[];
  incomeCategories: string[];
  incomeHistory: IncomeTransactionType[];
  expenseHistory: ExpensesTransactionType[];
}

export interface IncomeTransactionType {
  date: number;
  note: string;
  amount: number;
  source: string;
}

export interface ExpensesTransactionType {
  date: number;
  note: string;
  amount: number;
  category: string;
}
