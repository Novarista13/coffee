import React from "react";
import Text from "../../reusable/TypeText";

export default function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <Text text="Enhance your coffee experience..." loop={true} delay={50} />
      </div>
    </div>
  );
}
