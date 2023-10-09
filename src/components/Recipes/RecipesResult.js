import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { useContext } from "react";
import { RecipesContext } from "../../Contexts/RecipesContext";
import { recipesResultSwitch } from "../../data/recipes/RecipesResultSwitch";
import { recipesImage } from "../../data/recipes/recipesImage";

export default function RecipesResult() {
  const { recipesMaterial } = useContext(RecipesContext);

  return (
    <div className="recipes-result-section">
      {scroll.scrollToTop()}
      <Container>
        <div className="recipes-result-title">
          <h2>Your Results</h2>
          <h5>
            Your Items:{" "}
            <span style={{ fontSize: "16px" }}>
              {recipesMaterial.join(", ")}
            </span>
          </h5>
        </div>

        <Row>
          {recipesResultSwitch(recipesMaterial).map((items, id) =>
            items ? (
              <Col lg={4} sm={6} className="recipes-result-col" key={id}>
                <div className="recipes-result-image">
                  <img
                    className="items-image"
                    style={{ borderRadius: "25px" }}
                    src={recipesImage(items)}
                    alt={items}
                    width={200}
                    height={250}
                  />
                  <h5 key={id}>{items}</h5>
                </div>
              </Col>
            ) : (
              <h5 key={id} className="mt-5">
                {" "}
                You can't make a drink only with these things.
              </h5>
            )
          )}
        </Row>
        <Link to="/recipes" aria-label="Make Drink">
          <button className="drink-button" onClick={() => localStorage.clear()}>
            Make Another Drink
          </button>
        </Link>
      </Container>
    </div>
  );
}
