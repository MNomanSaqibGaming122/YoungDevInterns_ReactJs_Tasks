import { Container, Row, Col } from 'react-bootstrap';
import DepartmentCard from '../components/academics/DepartmentCard';
import './Academics.css'; 
import departments from '../components/data/departments';

const Academics = () => {
  return (
    <div>
      <div className="academics-hero text-center text-white d-flex align-items-center justify-content-center">
        <Container>
          <h1>Academics</h1>
          <p className="lead">Explore our diverse range of programs and departments.</p>
        </Container>
      </div>
      <Container className="my-5">
        <h2 className="text-center mb-4">Our Academic Departments</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {departments.map((dept) => (
            <Col key={dept.id}>
              <DepartmentCard
                name={dept.name}
                description={dept.description}
                link={`/academics/${dept.id}`}
                image={dept.image}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Academics;