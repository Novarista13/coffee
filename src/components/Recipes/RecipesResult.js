import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { productsData } from "../../data/products/productsData";
import { productsImage } from "../../data/products/productsImage";
import arrowLeft from "../../images/shops/arrow-left.svg";
import { HashLink } from "react-router-hash-link";
import { animateScroll as scroll } from "react-scroll";

export default function RecipesResult() {
  return (
    <div className="recipes-result-section">
      {scroll.scrollToTop()}
      <Container>
        <div className="recipes-result-title">
          <h2>Your Results</h2>
          <h5>
            Your Items: Espresso Machine, Kettle, Oat milk, Ice, Vanilla syrup
          </h5>
        </div>

        <Row>
          {productsData.map(
            (products, id) =>
              id < 6 && (
                <Col lg={4} md={6} className="recipes-result-col">
                  <div className="recipes-result-image" key={id}>
                    <img
                      className="products-image"
                      src={productsImage(products)}
                      alt={products}
                      width={150}
                      height={150}
                    />
                    <p>{products}</p>
                  </div>

                  <HashLink to="#shops">
                    <img
                      width={45}
                      className="arrow-down"
                      src={arrowLeft}
                      alt="arrow-down"
                    />
                  </HashLink>
                </Col>
              )
          )}
        </Row>
      </Container>
    </div>
  );
}
