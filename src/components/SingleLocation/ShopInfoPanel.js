import { shopInfo } from "../../data/shops/shopInfo";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import arrowLeft from "../../images/shops/arrow-left.svg";
// import { productsImage } from "../../data/products/productsImage";
import { HashLink } from "react-router-hash-link";
import { useContext } from "react";
import { SingleShopContext } from "../../Contexts/SingleShopContext";

export default function ShopInfoPanel() {
  const { shopName } = useContext(SingleShopContext);
  let shop = shopName ? shopName : "Brew Haven";

  return (
    <div className="shop-info-section" id="info">
      <Container>
        <div className="shop-description">
          <h2>{shop}</h2>
          <h5>{shopInfo(shop).description}</h5>
        </div>
        <div className="shop-vibe">
          <h3>Vibe</h3>
          <ul>
            {shopInfo(shop).vibe.map((vibe, id) => (
              <li key={id}>{vibe}</li>
            ))}
          </ul>
        </div>
        <div className="shop-location">
          <h3>Location & Hours</h3>
          <ul>
            <li>{shopInfo(shop).location}</li>
            <li>{shopInfo(shop).hours}</li>
          </ul>
        </div>
        <div className="shop-popular-items">
          <h3>Popular Items</h3>
          <Row>
            {shopInfo(shop).popularItems.map((items, id) => (
              <Col key={id}>
                {/* <img
                  className="popular-item-image"
                  src={productsImage(items)}
                  alt={items}
                  width={150}
                  height={100}
                /> */}
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
