import React from "react";
import { Link } from "react-router-dom";

export default function RecipesHero() {
  return (
    <div className="recipes-hero-section">
      <div className="recipes-hero-text">
        <h1>WELCOME TO THE LAB</h1>
        <h2>See What You Can Make</h2>
      </div>
      <Link to="/recipes" aria-label="Recipes Panel">
        <button className="recipes-button">Let's Get Started</button>
      </Link>
    </div>
  );
}
