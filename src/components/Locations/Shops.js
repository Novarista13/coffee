import { shopData } from "../../data/shops/shopData";
import { shopImage } from "../../data/shops/shopImage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Shops() {
  return (
    <div className="location-shops" id="shops">
      <Container>
        <Row>
          {shopData.map((shop, id) => (
            <Col>
              <div className="location-shops-box" key={id}>
                <img
                  className="shop-image"
                  src={shopImage(shop)}
                  alt={shop}
                  width={150}
                  height={150}
                />
                <p style={{marginBottom: 10}}>{shop}</p>
                <button className="shop-button">See More</button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
