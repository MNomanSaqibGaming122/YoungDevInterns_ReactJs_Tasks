import { Container, Row, Col, Card, Carousel, Image } from 'react-bootstrap';
import './TestimonialsSection.css'; 

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ali Khan",
      program: "FSC. Computer Science",
      quote: "Joining this college was the best decision I ever made. The faculty are incredibly supportive, and the hands-on projects prepared me perfectly for my career in tech in Peshawar.",
      image: "https://randomuser.me/api/portraits/men/32.jpg" 
    },
    {
      id: 2,
      name: "Fatima Ahmed",
      program: "FA. Business Administration",
      quote: "The campus life is amazing! There's a strong sense of community, and the extracurricular activities are a great way to meet new people and develop leadership skills relevant to the KPK business landscape.",
      image: "https://randomuser.me/api/portraits/women/44.jpg" 
    },
    {
      id: 3,
      name: "Usman Tariq",
      program: "FSC. Natural Sciences",
      quote: "The academic rigor here is balanced with a focus on personal growth. I've not only gained knowledge but also developed confidence and a global perspective, right here in Peshawar.",
      image: "https://randomuser.me/api/portraits/men/50.jpg" 
    },
    {
      id: 4,
      name: "Aisha Bibi",
      program: "FA. English Literature",
      quote: "The literature department is exceptional. The professors are inspiring, and the diverse perspectives from students across Khyber Pakhtunkhwa make every discussion enriching.",
      image: "https://randomuser.me/api/portraits/women/68.jpg" 
    }
  ];

  return (
    <section className="bg-light py-5">
      <Container>
        <h2 className="text-center mb-5">What Our Students Say</h2>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Carousel indicators={true} controls={true}>
              {testimonials.map((testimonial) => (
                <Carousel.Item key={testimonial.id}>
                  <Card className="testimonial-card text-center p-4 shadow-sm mx-auto">
                    <Card.Body>
                      <div className="mb-3">
                        <Image src={testimonial.image} alt={testimonial.name} roundedCircle className="testimonial-img mb-3" />
                        <h5 className="mb-0">{testimonial.name}</h5>
                        <p className="text-muted">{testimonial.program}</p>
                      </div>
                      <blockquote className="blockquote mb-0">
                        <p className="fst-italic">"{testimonial.quote}"</p>
                      </blockquote>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialsSection;