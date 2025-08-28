import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DepartmentCard = ({ name, description, link, image }) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={image} style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title className="text-primary">{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="outline-primary" as={Link} to={link}>
          Explore
        </Button>
      </Card.Body>
    </Card>
  );
};

export default DepartmentCard;