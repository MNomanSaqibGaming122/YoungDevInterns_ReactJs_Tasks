import { Container, Row, Col } from 'react-bootstrap';
import './GallerySection.css';

import galleryImage1 from '../../assets/images/gallery/image1.jpg';
import galleryImage2 from '../../assets/images/gallery/image2.jpg';
import galleryImage3 from '../../assets/images/gallery/image3.jpg';
import galleryImage4 from '../../assets/images/gallery/image4.jpg';
import galleryImage5 from '../../assets/images/gallery/image5.jpg';
import galleryImage6 from '../../assets/images/gallery/image6.jpg';

const GallerySection = () => {
  const galleryImages = [
    galleryImage1,
    galleryImage2,
    galleryImage3,
    galleryImage4,
    galleryImage5,
    galleryImage6,
  ];

  return (
    <section className="my-5">
      <Container>
        <h2 className="text-center mb-4">Our Gallery</h2>
        <Row className="g-4 justify-content-center">
          {galleryImages.map((image, index) => (
            <Col xs={12} md={6} lg={4} key={index}>
              <img 
                src={image} 
                alt={`College Gallery ${index + 1}`} 
                className="gallery-image w-100" 
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default GallerySection;