import "./App.css";
import styled from "styled-components";
import React, { useRef, useState } from "react";
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
const GuitarBox = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 0.3s linear;
  border-radius: 50px;

  &:hover {
    box-shadow: 5px 5px 10px #dedede, -5px -5px 10px #e2e2e2;
    cursor: pointer;
  }

  img {
    height: 50%;
  }
  p:last-child {
    font-weight: bold;
    font-size: 1.5rem;
  }
`;
const ShoppingCart = styled.span`
  position: absolute;
  top: 2%;
  right: 2%;
  font-size: 1.7rem;
  opacity: 0;
  z-index: 10000;
  cursor: pointer;
`;
const Fade = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: #000000ba;
  z-index: 99;
  display: none;
`;
const ViewGuitar = styled.div`
  width: 35vw;
  height: 35vw;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  display: none;
  z-index: 99999;
  color: black;
`;

const App = () => {
  const ExploreShow = () => {
    gsap.to(".item", {
      duration: 0.3,
      rotationY: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
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
    gsap.to(".shopping-cart", {
      delay: 0.9,
      duration: 0.3,
      opacity: 1,
    });
  };
  const [brandState, setBrandState] = useState("");
  const brandRef = useRef<HTMLParagraphElement>(null);
  const [imgState, setImgState] = useState("");
  const imgRef = useRef<HTMLImageElement>(null);
  const [costState, setCostState] = useState("");
  const costRef = useRef<HTMLParagraphElement>(null);
  const ViewBoxShow = () => {
    if (brandRef.current && imgRef.current && costRef.current) {
      setBrandState(`${brandRef.current.textContent}`);
      setImgState(`${imgRef.current?.src}`);
      setCostState(`${costRef.current.textContent}`);
    }
  };
  gsap.to(".fade", {
    duration: 1,
    display: "block",
  });
  gsap.to(".view-guitar", {
    duration: 1,
    display: "block",
  });

  const ViewBoxHide = () => {
    gsap.to(".fade", {
      display: "none",
    });
    gsap.to(".view-guitar", {
      display: "none",
    });
  };
  const guitar = (
    brand: string,
    model: string,
    cost: number,
    image: string
  ) => {
    return (
      <GuitarBox onClick={ViewBoxShow}>
        <img ref={imgRef} src={image}></img>
        <p ref={brandRef}>
          {brand} {model}
        </p>
        <p ref={costRef}>{cost} zł </p>
      </GuitarBox>
    );
  };

  return (
    <div className="App">
      <Fade onClick={ViewBoxHide} className="fade">
        <ViewGuitar className="view-guitar">
          <div>
            <img src={imgState} alt="bassguitar"></img>
            <aside>
              <p>{brandState}</p>
              <p>{costState}</p>
            </aside>
          </div>
        </ViewGuitar>
      </Fade>
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
      <ShoppingCart className="shopping-cart">&#128722;</ShoppingCart>
      <MainSection className="MainSection">
        <div className="item item1">
          {guitar(
            "Harley Benton",
            "JB-75MN NA Vintage Series",
            777,
            "https://thumbs.static-thomann.de/thumb/thumb248x248/pics/prod/224321.webp"
          )}
        </div>
        <div className="item item2">
          {guitar(
            "Höfner",
            "Ignition SE",
            1499,
            "https://thumbs.static-thomann.de/thumb/thumb248x248/pics/prod/484469.webp"
          )}
        </div>
        <div className="item item3">
          {guitar(
            "Ibanez",
            "BTB806MS-TGF",
            6599,
            "https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/533833.webp"
          )}
        </div>
        <div className="item item4">
          {guitar(
            "Warwick",
            "WGPS1226 10AA OVA FR6 Showroom",
            10890,
            "https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/555007.webp"
          )}
        </div>
        <div className="item item5">
          {guitar(
            "Ibanez",
            "GSR206B-WNF",
            1799,
            "https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/356134.webp"
          )}
        </div>
        <div className="item item6">
          {guitar(
            "Music Man",
            "35th anniversary Stingray 5",
            25990,
            "https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/544899.webp"
          )}
        </div>
      </MainSection>
    </div>
  );
};

export default App;
