import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { coffeeMaterialData } from "../../data/recipes/coffeeMaterialData";
import { animateScroll as scroll } from "react-scroll";
import { useContext } from "react";
import { RecipesContext } from "../../Contexts/RecipesContext";

export default function CoffeeMaterial() {
  const { recipesMaterial, setRecipesMaterial } = useContext(RecipesContext);

  return (
    <div className="coffee-material-section">
      {scroll.scrollToTop()}

      <Container className="coffee-material-container">
        <h2>Which of these do you have?</h2>
        <Form className="materials-checkbox">
          <Row className="checkbox-row">
            {coffeeMaterialData.map((m, id) =>
              id === 0 ? (
                <Col
                  key={id}
                  lg={7}
                  md={12}
                  className="checkbox-col checkbox-col-1 ps-lg-5"
                >
                  {coffeeMaterialData.map((material, i) =>
                    i % 2 === 0 ? (
                      <Form.Check
                        key={i}
                        label={material}
                        name={material}
                        className="materials"
                        type={"checkbox"}
                        checked={recipesMaterial.includes(material)}
                        id={material}
                        onChange={(e) => {
                          e.target.checked
                            ? setRecipesMaterial([...recipesMaterial, material])
                            : setRecipesMaterial(
                                recipesMaterial.filter((i) => i !== material)
                              );
                          localStorage.setItem(
                            "recipesMaterial",
                            JSON.stringify(recipesMaterial)
                          );
                        }}
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
                        checked={recipesMaterial.includes(material)}
                        type={"checkbox"}
                        id={material}
                        onChange={(e) => {
                          e.target.checked
                            ? setRecipesMaterial([...recipesMaterial, material])
                            : setRecipesMaterial(
                                recipesMaterial.filter((i) => i !== material)
                              );
                          localStorage.setItem(
                            "recipesMaterial",
                            JSON.stringify(recipesMaterial)
                          );
                        }}
                      />
                    ) : null
                  )}
                </Col>
              ) : null
            )}
          </Row>
          <Link to="/recipes/2" aria-label="Single Project">
            <button className="shop-button">Next</button>
          </Link>
        </Form>
      </Container>
    </div>
  );
}
