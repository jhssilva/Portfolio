import React from "react";
import MainTitle from "./MainTitle";
import PongGame from "../resources/img/PongGame.png";
import RestauranteChuva from "../resources/img/RestauranteChuva.jpeg";
import TicTacToe from "../resources/img/TicTacToe.png";
import Snake from "../resources/img/Snake.png";
import FlappyBird from "../resources/img/FlappyBird.png";
import Bomberman from "../resources/img/Bomberman.png";

const Portfolio = () => {
  const listPortfolioItems = [
    {
      id: 1,
      title: "Pong Game",
      endpoint: "https://github.com/jhssilva/PongGame",
      img: <PongGame />,
    },
    {
      id: 2,
      title: "Restaurante Chuva",
      endpoint: "https://github.com/jhssilva/RestauranteChuva",
      img: <RestauranteChuva />,
    },
    {
      id: 3,
      title: "Tic Tac Toe",
      endpoint: "https://github.com/jhssilva/Tic-Tac-Toe",
      img: <TicTacToe />,
    },
    {
      id: 4,
      title: "Snake Simulator",
      endpoint: "https://github.com/jhssilva/SnakeSimulation",
      img: <Snake />,
    },
    {
      id: 5,
      title: "Flappy Bird",
      endpoint: "https://github.com/jhssilva/Flappy-Bird",
      img: <FlappyBird />,
    },
    {
      id: 6,
      title: "Bomberman",
      endpoint: "https://github.com/jhssilva/Bomberman",
      img: <Bomberman />,
    },
  ];

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
      <MainTitle headerBegin="My" headerEnd="Portfolio" text="My Work" />
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
