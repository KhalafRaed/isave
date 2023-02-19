import React from "react";
import { ColumnsType } from "antd/es/table";
import { ExpensesTransactionType, IncomeTransactionType } from "../../types";

export enum HistoryTypes {
  Income = "Income",
  Expenses = "Expenses",
}

export const ExpenseCols: ColumnsType<ExpensesTransactionType> = [
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
    render: (text) => <>{text}</>,
    // onFilter: (value, record) => true,
    // filters: [
    //   {
    //     text: "London",
    //     value: "London",
    //   },
    //   {
    //     text: "New York",
    //     value: "New York",
    //   },
    // ],
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    render: (text) => <>{text}</>,
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    render: (num) => <>{new Date(num).toDateString()}</>,
  },
  {
    title: "Note",
    dataIndex: "note",
    key: "note",
    render: (text) => <>{text}</>,
  },
];

export const IncomeCols: ColumnsType<IncomeTransactionType> = [
  {
    title: "Source",
    dataIndex: "source",
    key: "source",
    render: (text) => <>{text}</>,
    // onFilter: (value, record) => true,
    // filters: [
    //   {
    //     text: "London",
    //     value: "London",
    //   },
    //   {
    //     text: "New York",
    //     value: "New York",
    //   },
    // ],
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    render: (text) => <>{text}</>,
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    render: (num) => <>{new Date(num).toDateString()}</>,
  },
  {
    title: "Note",
    dataIndex: "note",
    key: "note",
    render: (text) => <>{text}</>,
  },
];
