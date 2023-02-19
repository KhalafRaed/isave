import { Card, Col, Row } from "antd";

interface CardProps {
  loading: boolean;
}

export default function CustomCard({ loading }: CardProps) {
  return (
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={12} md={6}>
        <Card title="Balance" bordered={false} loading={loading} size="small">
          Card content
        </Card>
      </Col>
      <Col xs={24} sm={12} md={6}>
        <Card
          title="Avg Daily Income"
          bordered={false}
          loading={loading}
          size="small"
        >
          Card content
        </Card>
      </Col>
      <Col xs={24} sm={12} md={6}>
        <Card
          title="Avg Daily Expenses"
          bordered={false}
          loading={loading}
          size="small"
        >
          Card content
        </Card>
      </Col>
      <Col xs={24} sm={12} md={6}>
        <Card title="Debt" bordered={false} loading={loading} size="small">
          Card content
        </Card>
      </Col>
    </Row>
  );
}
