import React, { useState } from "react";
import { Radio, Table, Typography } from "antd";
import "./styles.css";
import { ExpenseCols, HistoryTypes, IncomeCols } from "./constants";
import { ExpensesTransactionType, IncomeTransactionType } from "../../types";
import { ColumnsType } from "antd/es/table";

const { Title } = Typography;

interface HistoryProps {
  incomeHistory: IncomeTransactionType[];
  expenseHistory: ExpensesTransactionType[];
  loading: boolean;
}

export default function History({
  incomeHistory,
  expenseHistory,
  loading,
}: HistoryProps) {
  const [selectedType, setSelectedType] = useState<HistoryTypes>(
    HistoryTypes.Income
  );

  return (
    <>
      <div className="history-tabs">
        <Title level={3}>{selectedType}</Title>
        <Radio.Group
          defaultValue={HistoryTypes.Income}
          buttonStyle="outline"
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <Radio.Button value={HistoryTypes.Income}>Income</Radio.Button>
          <Radio.Button value={HistoryTypes.Expenses}>Expenses</Radio.Button>
        </Radio.Group>
      </div>
      {selectedType === HistoryTypes.Income ? (
        <Table
          columns={IncomeCols}
          dataSource={incomeHistory}
          loading={loading}
        />
      ) : (
        <Table
          columns={ExpenseCols}
          dataSource={expenseHistory}
          loading={loading}
        />
      )}
    </>
  );
}
