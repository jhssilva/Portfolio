import React from "react";
import MainTitle from "./MainTitle";
import { listPortfolioItems } from "../utils/Information";

const Portfolio = () => {
  const PortfolioItem = (props) => {
    const { endpoint, img, title } = props;
    return (
      <div className="portfolio-item">
        <div className="image">
          <img src={img.type} alt={title} />
        </div>
        <a href={endpoint} target="_blank" rel="noreferrer">
          <div className="hover-items">
            <h3>{title}</h3>
            <div className="icons">
              <i className="fab fa-github"></i>
            </div>
          </div>
        </a>
      </div>
    );
  };

  return (
    <div>
      <MainTitle headerBegin="My" headerEnd="Portfolio" />
      <p className="port-text">
        Here is some of my work that I've done in various programming languages.
      </p>
      <div className="portfolios">
        {listPortfolioItems.map((item) => (
          <PortfolioItem
            key={item.id}
            title={item.title}
            endpoint={item.endpoint}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
