import { shopData } from "../../data/shops/shopData";
import { shopImage } from "../../data/shops/shopImage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SingleShopContext } from "../../Contexts/SingleShopContext";

export default function Shops() {
  const { setShopName } = useContext(SingleShopContext);
  return (
    <div className="location-shops" id="shops">
      <Container>
        <Row>
          {shopData.map((shop, id) => (
            <Col key={id}>
              <div className="location-shops-box">
                <img
                  className="shop-image"
                  src={shopImage(shop)}
                  alt={shop}
                  width={170}
                  height={200}
                />
                <p style={{ marginBottom: 10 }}>{shop}</p>
                <Link to="/locations/shop" aria-label="Single Project">
                  <button
                    className="shop-button"
                    onClick={() => {
                      setShopName(shop);
                      localStorage.setItem("shopName", shop);
                    }}
                  >
                    See More
                  </button>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
