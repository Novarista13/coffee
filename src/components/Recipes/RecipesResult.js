import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { useContext } from "react";
import { RecipesContext } from "../../Contexts/RecipesContext";
import { RecipesResultSwitch } from "../../data/recipes/RecipesResultSwitch";

export default function RecipesResult() {
  const { recipesMaterial } = useContext(RecipesContext);

  return (
    <div className="recipes-result-section">
      {scroll.scrollToTop()}
      <Container>
        <div className="recipes-result-title">
          <h2>Your Results</h2>
          <h5>Your Items: {recipesMaterial.join(", ")}</h5>
        </div>

        <Row>
          {RecipesResultSwitch(recipesMaterial).map((items, id) =>
            items ? (
              // <Col lg={4} md={6} className="recipes-result-col" key={id}>
              //   <div className="recipes-result-image">
              //     <img
              //       className="items-image"
              //       src={productsImage(items)}
              //       alt={items}
              //       width={150}
              //       height={150}
              //     />
              <h5 key={id}>{items}</h5>
            ) : (
              //   </div>
              // </Col>
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
