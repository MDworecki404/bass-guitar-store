import "./App.css";
import styled from "styled-components";
import React, { useRef } from "react";
import background from "./assets/background.mp4";
import gsap from "gsap";

const Header = styled.header`
  width: 100vw;
  height: 100vh;

  #videoBG {
    height: 100vh;
    width: 100vw;
    object-fit: cover;
    position: fixed;
    z-index: -100;
  }

  p {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 2.5rem;
  }
  .exploreButton {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20%;
    color: white;
    font-size: 2rem;
    button {
      width: 10vw;
      height: 8vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: none;
      border: none;
      z-index: 1;
      font-size: 2rem;
      color: white;
      transition: all 0.3s ease-in-out;
      cursor: pointer;

      &:hover {
        color: #c7c7c7;
      }
    }
  }
`;
const MainSection = styled.div`
  width: 100vw;
  height: 100vh;

  z-index: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  position: fixed;
  top: 0;
  left: 0;

  .item {
    transform: rotateY(90deg);
    display: none;
    background: rgb(253, 253, 253);
    transform-origin: left;
  }
`;

const App = () => {
  const ExploreShow = () => {
    gsap.to(".item", {
      duration: 0.3,
      rotationY: 0,
      display: "grid",
      stagger: 0.3,
    });
    gsap.to(".explorebutton", {
      duration: 0.3,
      zIndex: -1,
      opacity: 0,
    });
    gsap.to(".logo", {
      duration: 0.3,
      opacity: 0,
    });
  };

  return (
    <div className="App">
      <Header>
        <video autoPlay muted loop id="videoBG">
          <source src={background} />
        </video>
        <p className="logo">Bass Guitar Store</p>
        <p className="exploreButton">
          <button className="explorebutton" onClick={ExploreShow}>
            Explore
          </button>
        </p>
      </Header>
      <MainSection className="MainSection">
        <div className="item item1"></div>
        <div className="item item2"></div>
        <div className="item item3"></div>
        <div className="item item4"></div>
        <div className="item item5"></div>
        <div className="item item6"></div>
      </MainSection>
    </div>
  );
};

export default App;
