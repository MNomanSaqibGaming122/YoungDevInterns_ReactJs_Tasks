import { Container, Row, Col } from 'react-bootstrap';
import DepartmentCard from '../academics/DepartmentCard';
import departments from '../data/departments';

const DepartmentsSection = () => {
  return (
    <section className="my-5">
      <Container>
        <h2 className="text-center mb-4">Our Academic Departments</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {departments.map((dept) => (
            <Col key={dept.id}>
              <DepartmentCard
                name={dept.name}
                description={dept.description}
                image={dept.image}
                link={`/academics/${dept.id}`}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default DepartmentsSection;