import { shopInfo } from "../../data/shops/shopInfo";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import arrowLeft from "../../images/shops/arrow-left.svg";
import { recipesImage } from "../../data/recipes/recipesImage";
import { HashLink } from "react-router-hash-link";

export default function ShopInfoPanel() {
  return (
    <div className="shop-info-section" id="info">
      <Container>
        <div className="shop-description">
          <h2>{"Brew Haven"}</h2>
          <h5>{shopInfo("Brew Haven").description}</h5>
        </div>
        <div className="shop-vibe">
          <h3>Vibe</h3>
          <ul>
            {shopInfo("Brew Haven").vibe.map((vibe, id) => (
              <li key={id}>{vibe}</li>
            ))}
          </ul>
        </div>
        <div className="shop-location">
          <h3>Location & Hours</h3>
          <ul>
            <li>{shopInfo("Brew Haven").location}</li>
            <li>{shopInfo("Brew Haven").hours}</li>
          </ul>
        </div>
        <div className="shop-popular-items">
          <h3>Popular Items</h3>
          <Row>
            {shopInfo("Brew Haven").popularItems.map((items, id) => (
              <Col key={id}>
                <img
                  className="popular-item-image"
                  src={recipesImage(items)}
                  alt={items}
                  width={150}
                  height={100}
                />
                <p>{items}</p>

                <HashLink to="#shops">
                  <img
                    width={45}
                    className="arrow-down"
                    src={arrowLeft}
                    alt="arrow-down"
                  />
                </HashLink>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
}
