import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUsers, FaClipboardList, FaNewspaper } from 'react-icons/fa';

const Dashboard = () => {
  const stats = [
    {
      icon: <FaUsers size={32} />,
      label: 'Total Users',
      value: 1500,
      variant: 'primary',
    },
    {
      icon: <FaClipboardList size={32} />,
      label: 'Pending Admissions',
      value: 75,
      variant: 'warning',
    },
    {
      icon: <FaNewspaper size={32} />,
      label: 'Total Content Items',
      value: 230,
      variant: 'success',
    },
  ];

  return (
    <Container className="my-4">
      <h2 className="mb-4">Admin Dashboard</h2>
      <Row className="g-4">
        {stats.map((stat, index) => (
          <Col md={4} key={index}>
            <Card className={`text-white bg-${stat.variant} shadow`}>
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="mb-0">{stat.label}</h5>
                    <h1 className="display-4 fw-bold">{stat.value}</h1>
                  </div>
                  <div>
                    {stat.icon}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Dashboard;