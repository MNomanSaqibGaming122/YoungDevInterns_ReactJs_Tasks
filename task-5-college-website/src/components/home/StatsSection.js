import { Container, Row, Col, Card } from 'react-bootstrap';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaUserGraduate, FaLaptopCode, FaAward, FaChalkboardTeacher } from 'react-icons/fa';
import './StatsSection.css';

const statsData = [
  { label: 'Students Enrolled', value: 15000, icon: <FaUserGraduate size={48} className="text-primary mb-3" /> },
  { label: 'Academic Programs', value: 50, icon: <FaLaptopCode size={48} className="text-primary mb-3" /> },
  { label: 'Awards & Honors', value: 250, icon: <FaAward size={48} className="text-primary mb-3" /> },
  { label: 'Qualified Lecturers', value: 800, icon: <FaChalkboardTeacher size={48} className="text-primary mb-3" /> },
];

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 1,    
  });

  return (
    <section className="bg-light py-5" ref={ref}>
      <Container>
        <h2 className="text-center mb-5">Our Education Statistics</h2>
        <Row className="text-center g-4">
          {statsData.map((stat, index) => (
            <Col key={index} xs={6} md={3}>
              <Card className="p-4 border-0 rounded-4">
                <Card.Body>
                  {stat.icon}
                  <h1 className="fw-bold text-dark">
                    {inView && <CountUp end={stat.value} duration={2.5} separator="," />}
                    {!inView && 0}
                  </h1>
                  <p className="lead text-muted">{stat.label}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StatsSection;