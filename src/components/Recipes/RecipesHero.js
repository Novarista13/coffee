import React from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

export default function RecipesHero() {
  return (
    <div className="recipes-hero-section">
      {scroll.scrollToTop()}
      <div className="recipes-hero-text">
        <h1>WELCOME TO THE LAB</h1>
        <h2>See What You Can Make</h2>
        <Link to="/recipes/1" aria-label="Recipes Panel">
          <button
            className="recipes-button"
            onClick={() => {
              localStorage.removeItem("recipesMaterial");
            }}
          >
            Let's Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}
