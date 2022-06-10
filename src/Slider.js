import styled from "styled-components";
import { useState } from "react";
import { sliderInfo } from "./sliderInfo";

function Slider() {
  const slideList = sliderInfo.map((slide) => (
    <li key={slide.id}>
      <img src={slide.img} alt="" />
      <p>{slide.name}</p>
    </li>
  ));

  const [style, setStyle] = useState();

  function moveLeft() {
    setStyle({
      transform: `translateX(627px)`,
      transition: `all 0.4s ease-in-out`,
    });
  }

  function moveRight() {
    setStyle({
      transform: `translateX(-1254px)`,
      transition: `all 0.4s ease-in-out`,
    });
  }

  return (
    <SliderArea>
      <h1>요즘 사람들이 좋아하는 공간의 비밀</h1>
      <button onClick={moveLeft}>〈</button>
      <button onClick={moveRight}>〉</button>
      <SlideList>
        <ul style={style}>{slideList}</ul>
      </SlideList>
    </SliderArea>
  );
}

export default Slider;

const SliderArea = styled.div`
  font-family: "GimhaeGayaB";
  h1 {
    font-size: 2.5rem;
  }
`;
const SlideList = styled.div`
  width: 1254px;
  overflow: hidden;
  ul {
    display: flex;
  }
`;
