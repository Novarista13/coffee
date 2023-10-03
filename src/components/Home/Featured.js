import React from "react";
import Text from "../../reusable/TypeText";
import Container from "react-bootstrap/Container";
import Marquee from "react-fast-marquee";
import { shopData } from "../../data/shops/shopData";
import { shopImage } from "../../data/shops/shopImage";
import { recipesData } from "../../data/recipes/recipesData";
import { recipesImage } from "../../data/recipes/recipesImage";

export default function Featured() {
  return (
    <div className="featured-section">
      <Container>
        <h2 style={{ marginBottom: "30px" }}>
          <Text text="Hey There" loop={false} />
        </h2>
        <h5>
          <Text
            text="We are the Rochester Coffee Corner and our mission is to enhance your coffee experience and guide you through the world of Rochester coffee shops. Use our site to find coffee shops in Rochester, check out new blends, and experiment with recipes at home."
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
                  width={150}
                  height={150}
                />
                <p>{shop}</p>
              </div>
            ))}
          </Marquee>
        </div>
        <div className="featured-slide">
          <h4>Featured Recipes</h4>
          <Marquee
            gradient={false}
            speed={60}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {recipesData.map((recipes, id) => (
              <div className="featured-slide-box" key={id}>
                <img
                  className="recipes-image"
                  src={recipesImage(recipes)}
                  alt={recipes}
                  width={150}
                  height={150}
                />
                <p>{recipes}</p>
              </div>
            ))}
          </Marquee>
        </div>
      </Container>
    </div>
  );
}
