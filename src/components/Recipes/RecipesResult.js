import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { productsData } from "../../data/products/productsData";
import { productsImage } from "../../data/products/productsImage";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { useContext } from "react";
import { RecipesContext } from "../../Contexts/RecipesContext";

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
          {productsData.map(
            (products, id) =>
              id < 6 && (
                <Col lg={4} md={6} className="recipes-result-col" key={id}>
                  <div className="recipes-result-image">
                    <img
                      className="products-image"
                      src={productsImage(products)}
                      alt={products}
                      width={150}
                      height={150}
                    />
                    <p>{products}</p>
                  </div>
                </Col>
              )
          )}
        </Row>
        <Link to="/recipes" aria-label="Make Drink">
          <button className="drink-button">Make Another Drink</button>
        </Link>
      </Container>
    </div>
  );
}
