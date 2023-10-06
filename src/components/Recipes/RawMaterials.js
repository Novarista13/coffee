import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import arrowDown from "../../images/recipes/arrow-down.svg";
import {
  rawTypes,
  coffeeTypes,
  teaTypes,
  milkTypes,
  otherTypes,
} from "../../data/recipes/rawMaterialsData";

export default function RawMaterials() {
  let material;
  return (
    <div className="raw-materials-section">
      <Container className="raw-materials-container">
        <h2 style={{ margin: "50px auto" }}>Which of these do you have?</h2>
        {rawTypes.map((type, id) => (
          <div key={id} className="type-section">
            <div className="title">
              <h2 className="d-inline">
                {type[0].toUpperCase() + type.substring(1)}
              </h2>
              <img
                width={45}
                className="arrow-down"
                src={arrowDown}
                alt="arrow-down"
              />
            </div>
            <div className="d-none">
              {type === "coffee"
                ? (material = coffeeTypes)
                : type === "tea"
                ? (material = teaTypes)
                : type === "milk"
                ? (material = milkTypes)
                : type === "other"
                ? (material = otherTypes)
                : null}
            </div>

            <div className="raw-material-row">
              {material.map((m, id) =>
                id === 0 ? (
                  <Row key={id} className="raw-material-checkbox-row">
                    {material.map((item, i) =>
                      i < 4 ? (
                        <Col key={i} className="raw-material-checkbox-col">
                          <Form.Check
                            inline
                            label={item}
                            name={item}
                            className="raw-mateirals"
                            type={"checkbox"}
                            id={item}
                          />
                        </Col>
                      ) : null
                    )}
                  </Row>
                ) : id === 4 ? (
                  <Row key={id} className="raw-material-checkbox-row">
                    {material.map((item, i) =>
                      i > 3 ? (
                        <Col key={i} className="raw-material-checkbox-col">
                          <Form.Check
                            inline
                            label={item}
                            name={item}
                            className="raw-mateirals"
                            type={"checkbox"}
                            id={item}
                          />
                        </Col>
                      ) : null
                    )}
                  </Row>
                ) : null
              )}
            </div>
          </div>
        ))}
      </Container>
      <Link to="/recipes" aria-label="Make Drink">
        <button className="drink-button">Make my Drink</button>
      </Link>
    </div>
  );
}
