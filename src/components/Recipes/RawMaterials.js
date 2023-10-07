import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import arrowDown from "../../images/recipes/arrow-down.svg";
import { animateScroll as scroll } from "react-scroll";
import { useContext } from "react";
import {
  rawTypes,
  coffeeTypes,
  teaTypes,
  milkTypes,
  otherTypes,
} from "../../data/recipes/rawMaterialsData";
import { RecipesContext } from "../../Contexts/RecipesContext";

export default function RawMaterials() {
  let material;
  scroll.scrollToTop();

  const { recipesMaterial, setRecipesMaterial } = useContext(RecipesContext);

  return (
    <div className="raw-materials-section">
      <Container className="raw-materials-container ps-5">
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
              <Row>
                {material.map((item, id) => (
                  <Col
                    lg={3}
                    key={id}
                    className="raw-material-checkbox-col ps-lg-5"
                  >
                    <Form.Check
                      inline
                      label={item}
                      name={item}
                      className="raw-mateirals"
                      type={"checkbox"}
                      checked={recipesMaterial.includes(item)}
                      id={item}
                      onChange={(e) => {
                        e.target.checked
                          ? setRecipesMaterial([...recipesMaterial, item])
                          : setRecipesMaterial(
                              recipesMaterial.filter((i) => i !== item)
                            );
                        localStorage.setItem(
                          "recipesMaterial",
                          JSON.stringify(recipesMaterial)
                        );
                      }}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        ))}
      </Container>
      <Link to="/recipes/3" aria-label="Make Drink">
        <button className="drink-button">Make my Drink</button>
      </Link>
    </div>
  );
}
