import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import coffee from "../images/coffee.svg";

export default function Footer() {
  return (
    <Container className="footer-section">
      <Row className="footer-text">
        <Col lg={8} md={12}>
          <Row>
            <Col lg={7} md={12}>
              <Row>
                <Col>
                  <img
                    width={130}
                    className="footer-logo"
                    src={coffee}
                    alt="footer-logo"
                  />
                </Col>
                <Col className="site-name">
                  Nova <br />
                  Coffee <br />
                  Corner <br />
                  Co
                </Col>
              </Row>
            </Col>
            <Col className="footer-links">
              About <br />
              Locations <br />
              Recipes <br />
              Contact
              <br />
              Login
            </Col>
          </Row>
        </Col>
        <Col className="footer-note">
          <div className="footer-note-text">
            This Website is coded by Novarista
          </div>
        </Col>
      </Row>
    </Container>
  );
}
