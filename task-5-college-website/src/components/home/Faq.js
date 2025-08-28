import { Container, Row, Col, Accordion } from 'react-bootstrap';
import './Faq.css';

const Faq = () => {
  const faqData = [
    {
      id: 1,
      question: "What are the application deadlines for the next academic year?",
      answer: "The application deadline for regular admission is January 15th. We encourage all applicants to submit their materials well before this date."
    },
    {
      id: 2,
      question: "What is the tuition fee for international students?",
      answer: "Tuition fees vary by program and student status. Please visit our financial aid section or contact the admissions office for detailed information."
    },
    {
      id: 3,
      question: "What scholarships and financial aid options are available?",
      answer: "We offer a wide range of scholarships, grants, and work-study programs. You can find all the details on our financial aid page."
    },
    {
      id: 4,
      question: "How can I schedule a campus tour?",
      answer: "Campus tours can be scheduled online through our website. We offer both in-person and virtual tour options to accommodate your needs."
    },
    {
      id: 5,
      question: "What student clubs and organizations does the college offer?",
      answer: "Our college has over 100 student clubs and organizations, ranging from academic and professional clubs to sports and arts groups. You can find a complete list in the Campus Life section of our website."
    }
  ];

  return (
    <div>
      <div className="faq-hero text-center text-white d-flex align-items-center justify-content-center">
        <Container>
          <h1 className="display-4 fw-bold">Frequently Asked Questions</h1>
          <p className="lead">Find answers to your most common questions about our college.</p>
        </Container>
      </div>

      <Container className="my-5">
        <h2 className="text-center mb-4">Questions & Answers</h2>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Accordion defaultActiveKey="0">
              {faqData.map((item) => (
                <Accordion.Item key={item.id} eventKey={item.id.toString()}>
                  <Accordion.Header>{item.question}</Accordion.Header>
                  <Accordion.Body>
                    {item.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Faq;