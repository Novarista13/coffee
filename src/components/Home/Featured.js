import React from "react";
import Text from "../../reusable/TypeText";
import Container from "react-bootstrap/Container";
import Marquee from "react-fast-marquee";
import { shopData } from "../../data/shops/shopData";
import { shopImage } from "../../data/shops/shopImage";
import { productsData } from "../../data/products/productsData";
import { productsImage } from "../../data/products/productsImage";

export default function Featured() {
  return (
    <div className="featured-section">
      <Container>
        <h2 style={{ marginBottom: "30px" }}>
          <Text text="Hey There" loop={false} />
        </h2>
        <h5>
          <Text
            text="We are the Rochester Coffee Corner and our mission is to enhance your coffee experience and guide you through the world of Rochester coffee shops. Use our site to find coffee shops in Rochester, check out new blends, and experiment with products at home."
            loop={false}
            delay={30}
          />
        </h5>
        <div className="featured-slide">
          <h4>Featured Shops</h4>
          <Marquee
            gradient={false}
            speed={60}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {shopData.map((shop, id) => (
              <div className="featured-slide-box" key={id}>
                <img
                  className="shop-image"
                  src={shopImage(shop)}
                  alt={shop}
                  width={200}
                  height={100}
                />
                <p>{shop}</p>
              </div>
            ))}
          </Marquee>
        </div>
        <div className="featured-slide">
          <h4>Featured products</h4>
          <Marquee
            gradient={false}
            speed={60}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {productsData.map((products, id) => (
              <div className="featured-slide-box" key={id}>
                <img
                  className="products-image"
                  src={productsImage(products)}
                  style={{borderRadius: "25px"}}
                  alt={products}
                  width={200}
                  height={250}
                />
                <p>{products}</p>
              </div>
            ))}
          </Marquee>
        </div>
      </Container>
    </div>
  );
}
