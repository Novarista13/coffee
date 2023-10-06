import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import coffee from "../images/coffee.svg";
import { Link } from "react-router-dom";

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
          <Link className="footer-links" to="/home">
            Home
          </Link>
          <br />
          <Link className="footer-links" to="/about">
            About
          </Link>
          <br />
          <Link className="footer-links" to="/locations">
            Locations
          </Link>
          <br />
          <Link className="footer-links" to="/recipes">
            Recipes
          </Link>
          <br />
          <Link className="footer-links" to="/contact">
            Contact
          </Link>
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
