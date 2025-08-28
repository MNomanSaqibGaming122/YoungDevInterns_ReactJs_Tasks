import React, { useState, useEffect } from 'react'; 
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import NewsCard from './NewsCard';
import './NewsEventsSection.css';

const NewsEventsSection = () => {
  const [newsData, setNewsData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedNews, setSelectedNews] = useState({});
  const [animate, setAnimate] = useState(false); 

  useEffect(() => {
    const storedContent = JSON.parse(localStorage.getItem('content'));
    if (storedContent && storedContent.length > 0) {
      setNewsData(storedContent);
    } else {
      setNewsData([
        {id: 1, title: 'Orientation Week 2025', date: '2025-08-25', body: 'A week full of activities to welcome our new students.'},
        {id: 2, title: 'Tech Summit Announced', date: '2025-08-22', body: 'Our annual tech summit will feature guest speakers from major tech companies.'},
        {id: 3, title: 'Library Renovation Complete', date: '2025-08-20', body: 'The newly renovated library is now open with state-of-the-art facilities.'}
      ]);
    }

    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100); 

    return () => clearTimeout(timer);
  }, []);

  const handleShowModal = (newsItem) => {
    setSelectedNews(newsItem);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedNews({});
  };

  return (
    <section className="my-5">
      <Container>
        <h2 className="text-center mb-5 news-section-title">Latest News & Events</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {newsData.length > 0 ? (
            newsData.map((newsItem, index) => (
              <Col 
                key={newsItem.id} 
                className={animate ? 'card-col-enter' : ''}
                style={{ animationDelay: animate ? `${index * 120}ms` : '0s' }}
              >
                <NewsCard
                  title={newsItem.title}
                  date={newsItem.date}
                  body={newsItem.body || 'No description available.'}
                  onReadMore={() => handleShowModal(newsItem)}
                />
              </Col>
            ))
          ) : (
            <p className="text-center">No news or events to display.</p>
          )}
        </Row>
      </Container>
      
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton className="custom-modal-header">
          <Modal.Title>{selectedNews.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="custom-modal-body">
          <p className="text-muted">{selectedNews.date}</p>
          <p>{selectedNews.body}</p>
        </Modal.Body>
        <Modal.Footer className="custom-modal-footer">
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default NewsEventsSection;