import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import coffee from "../images/coffee.svg";

export default function Footer() {
  return (
    <Container className="footer-section">
      <Row className="footer-text">
        <Col lg={3} sm={4} xs={6}>
          <img
            width={130}
            className="footer-logo"
            src={coffee}
            alt="footer-logo"
          />
        </Col>
        <Col lg={3} sm={4} xs={6} className="site-name">
          Nova <br />
          Coffee <br />
          Corner <br />
          Co
        </Col>
        <Col lg={3} sm={4} xs={6} className="footer-links">
          About <br />
          Locations <br />
          Recipes <br />
          Contact
          <br />
          Login
        </Col>
        <Col lg={3} sm={12} xs={6} className="footer-note mt-lg-5">
          <div className="footer-note-text">
            This Website is coded by Novarista
          </div>
        </Col>
      </Row>
    </Container>
  );
}
