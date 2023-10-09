import React from "react";
import Text from "../../reusable/TypeText";

export default function AboutHero() {
  return (
    <div className="about-hero-section">
      <div className="about-hero-text">
        <p>
          <Text
            text="What is a better way to connect than by sitting down for a cup of tea or coffee? The Coffee Nova Corner is your guide to coffee shops in Yangon. Whether you are loooking for your morning coffee before work, coming in for a peaceful study day, or enjoying a night out with friends, our website can help you find what you are looking for.
            Use this site to find locations, check out what products your neighbors are loving right now, and see how to recreate your favorite recipes at home."
            loop={false}
            delay={30}
          />
        </p>
      </div>
    </div>
  );
}
