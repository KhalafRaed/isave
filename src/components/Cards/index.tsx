import { Card, Col, Row } from "antd";
import { UserDocumentType } from "../../types";

interface CardProps {
  loading: boolean;
  values: UserDocumentType;
}

export default function CustomCard({ loading, values }: CardProps) {
  return (
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={12} md={6}>
        <Card title="Balance" bordered={false} loading={loading} size="small">
          {values.balance ?? 0}
        </Card>
      </Col>
      <Col xs={24} sm={12} md={6}>
        <Card
          title="Avg Daily Expenses"
          bordered={false}
          loading={loading}
          size="small"
        >
          {values.avgDailyExpenses ?? 0}
        </Card>
      </Col>
      <Col xs={24} sm={12} md={6}>
        <Card
          title="Avg Monthly Expenses"
          bordered={false}
          loading={loading}
          size="small"
        >
          {values.avgMonthlyExpenses ?? 0}
        </Card>
      </Col>
      <Col xs={24} sm={12} md={6}>
        <Card title="Debt" bordered={false} loading={loading} size="small">
          {values.debt ?? 0}
        </Card>
      </Col>
    </Row>
  );
}
