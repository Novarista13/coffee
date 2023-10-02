import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { coffeeData } from "../data/coffee-description/coffeeData";
import { coffeeText } from "../data/coffee-description/coffeeText";

export default function CoffeeCard() {
  return (
    <div className="coffee-card-section">
      <Container className="coffee-card-container">
        <Carousel interval={null} data-bs-theme="dark">
          <Carousel.Item >
            <Row className="coffee-card-row">
              {coffeeData.map((coffee, id) =>
                id > 2 ? null : (
                  <Col>
                    <Card
                      className="coffee-card"
                      style={{ width: "18rem" }}
                      key={id}
                    >
                      <Card.Body>
                        <Card.Title className="coffee-card-title">
                          {coffee}
                        </Card.Title>
                        <Card.Text className="coffee-card-text">
                          {coffeeText(coffee)}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              )}
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="coffee-card-row">
              {coffeeData.map((coffee, id) =>
                id <= 2 ? null : id > 5 ? null : (
                  <Col>
                    <Card
                      className="coffee-card"
                      style={{ width: "18rem" }}
                      key={id}
                    >
                      <Card.Body>
                        <Card.Title className="coffee-card-title">
                          {coffee}
                        </Card.Title>
                        <Card.Text className="coffee-card-text">
                          {coffeeText(coffee)}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              )}
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="coffee-card-row">
              {coffeeData.map((coffee, id) =>
                id <= 5 ? null : (
                  <Col>
                    <Card
                      className="coffee-card"
                      style={{ width: "18rem" }}
                      key={id}
                    >
                      <Card.Body>
                        <Card.Title className="coffee-card-title">
                          {coffee}
                        </Card.Title>
                        <Card.Text className="coffee-card-text">
                          {coffeeText(coffee)}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              )}
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}
