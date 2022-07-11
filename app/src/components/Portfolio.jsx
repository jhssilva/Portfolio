import React from "react";
import MainTitle from "./MainTitle";

const Portfolio = () => {
  const PortfolioItem = (props) => {
    return (
      <div className="portfolio-item">
        <div className="image">{"image"}</div>
        <div className="hover-item">
          <h3>Project Source</h3>
          <div className="icons">
            <a href={"www.google.com"} target="_blank">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <MainTitle headerBegin="My" headerEnd="Portfolio" text="My Work" />
      <p className="port-text">
        Here is some of my work that I've done in various programming languages.
      </p>
      <div className="portfolios">
        <PortfolioItem />
      </div>
    </div>
  );
};

export default Portfolio;
