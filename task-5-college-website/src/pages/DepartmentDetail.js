import { useParams, Navigate } from 'react-router-dom';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import departments from '../components/data/departments';

const DepartmentDetail = () => {
  const { id } = useParams();
  const department = departments.find(dept => dept.id === parseInt(id));

  if (!department) {
    return <Navigate to="/academics" />;
  }

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1>{department.name}</h1>
          <p className="lead">{department.description}</p>
          <hr />
          <h3>About the Program</h3>
          <p>{department.fullDescription}</p>
          <h3 className="mt-4">Courses Offered</h3>
          <ListGroup>
            {department.courses.map((course, index) => (
              <ListGroup.Item key={index}>{course}</ListGroup.Item>
            ))}
          </ListGroup>
          <h3 className="mt-4">Faculty</h3>
          <ListGroup>
            {department.faculty.map((member, index) => (
              <ListGroup.Item key={index}>{member}</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default DepartmentDetail;