import { Card, Button } from 'react-bootstrap';
import { FaCalendarAlt } from 'react-icons/fa';

const NewsCard = ({ title, date, body, onReadMore }) => {
  const truncatedBody = body.length > 100 ? body.substring(0, 100) + '...' : body;

  return (
    <Card className="news-card h-100">
      <Card.Body className="d-flex flex-column">
        <Card.Title className="news-card-title">{title}</Card.Title>
        <Card.Subtitle className="news-card-date mb-2">
          <FaCalendarAlt className="me-2" />{date}
        </Card.Subtitle>
        <Card.Text className="news-card-text">
          {truncatedBody}
        </Card.Text>
        <Button 
          variant="outline-primary" 
          className="read-more-btn mt-auto" 
          onClick={onReadMore}
        >
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;