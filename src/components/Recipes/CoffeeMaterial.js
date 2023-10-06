import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { coffeeMaterialData } from "../../data/recipes/coffeeMaterialData";

export default function CoffeeMaterial() {
  return (
    <div className="coffee-material-section">
      <h2>Which of these do you have?</h2>
      <Container>
        <Form className="materials-checkbox">
          <Row className="checkbox-row">
            {coffeeMaterialData.map((m, id) =>
              id === 0 ? (
                <Col key={id} className="checkbox-col checkbox-col-1 mx-auto">
                  {coffeeMaterialData.map((material, i) =>
                    i % 2 === 0 ? (
                      <Form.Check
                        key={i}
                        label={material}
                        name={material}
                        className="materials"
                        type={"checkbox"}
                        id={material}
                      />
                    ) : null
                  )}
                </Col>
              ) : id === 1 ? (
                <Col key={id} className="checkbox-col checkbox-col-2">
                  {coffeeMaterialData.map((material, i) =>
                    i % 2 !== 0 ? (
                      <Form.Check
                        key={i}
                        label={material}
                        name={material}
                        className="materials"
                        type={"checkbox"}
                        id={material}
                      />
                    ) : null
                  )}
                </Col>
              ) : null
            )}
          </Row>
          <Link to="/recipes" aria-label="Single Project">
            <button  className="shop-button">
              Next
            </button>
          </Link>
        </Form>
      </Container>
    </div>
  );
}
