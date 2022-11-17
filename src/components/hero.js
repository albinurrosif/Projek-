import 'bootstrap-icons/font/bootstrap-icons.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../assets/style.css';
import Button from './button';
import Img from '../assets/img/about.png';
export default function Hero() {
  return (
    <Container classname="py-5">
      <Row>
        <Col lg={6} md={6} sm={12} className="d-flex align-items-center">
          <div className="text-lg-start text-md-start text-center">
            <h1 className="font-primary color-primary py-3">Lorem ipsum dolor sit amet</h1>
            <p className="font-secondary color-secondary py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quibusdam illum neque illo iusto maiores.</p>
            <Button text="Test Sound" icon="bi bi-arrow-right" />
          </div>
        </Col>
        <Col lg={6} md={6} sm={12} className="d-none d-lg-block">
          <Image src={Img} fluid />
        </Col>
      </Row>
    </Container>
  );
}
