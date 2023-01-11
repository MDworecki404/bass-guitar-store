import "./App.css";
import styled from "styled-components";
import React from "react";
import background from "./assets/background.mp4";
import gsap from "gsap";

const Header = styled.header`
  width: 100vw;
  height: 100vh;

  #videoBG {
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
    span {
      width: 10vw;
      height: 8vh;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      border: 2px solid white;
      transition: all 0.3s ease-in-out;
      &:hover {
        background-color: white;
        color: black;
        cursor: pointer;
      }
    }
  }
`;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header>
          <video autoPlay muted loop id="videoBG">
            <source src={background} />
          </video>
          <p>Bass Guitar Store</p>
          <p className="exploreButton">
            <span>Explore</span>
          </p>
        </Header>
      </div>
    );
  }
}

export default App;
