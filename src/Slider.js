import styled from "styled-components";
import { useState } from "react";
import { sliderInfo } from "./sliderInfo";

let trackOrder = 1;

function Slider() {
  //한 트랙의 너비 = 이미지 너비 * 3
  const trackWidth = 1254;
  //트릭 데이터로 인한 조정.
  const [style, setStyle] = useState({
    transform: `translateX(-${trackWidth}px)`,
  });

  //슬라이드 스타일 설정.
  function moveStyle(distance) {
    setStyle({
      transform: `translateX(-${distance}px)`,
      transition: `all 0.3s ease-in-out`,
    });
  }

  //트릭 데이터에서 진짜 데이터로 대체.
  function replaceSlide(distance) {
    setStyle({
      transform: `translateX(-${distance}px)`,
    });
  }

  function handleOrder(direction) {
    //왼쪽 클릭시.
    if (direction === -1) {
      trackOrder--;
    } else {
      //오른쪽 클릭시.
      trackOrder++;
    }
    moveStyle(trackOrder * trackWidth);

    //무한 루프 핸들링.
    if (trackOrder === 0) {
      setTimeout(() => replaceSlide(trackOrder * trackWidth), 301);
      trackOrder = 2;
    } else if (trackOrder === 3) {
      setTimeout(() => replaceSlide(trackOrder * trackWidth), 301);
      trackOrder = 1;
    }
  }

  const slideList = sliderInfo.map((slide) => (
    <li key={slide.id}>
      <img src={slide.img} alt="" />
      <p>{slide.name}</p>
    </li>
  ));

  return (
    <SliderArea>
      <h1>요즘 사람들이 좋아하는 공간의 비밀</h1>
      <Slides>
        <button onClick={() => handleOrder(-1)}>〈</button>
        <SlideList>
          <ul style={style}>{slideList}</ul>
        </SlideList>
        <button onClick={() => handleOrder(1)}>〉</button>
      </Slides>
    </SliderArea>
  );
}

export default Slider;

const SliderArea = styled.div`
  font-family: "GimhaeGayaB";
  h1 {
    font-size: 36px;
    margin: 20px;
    text-align: center;
  }
`;
const SlideList = styled.div`
  width: 1254px;
  overflow: hidden;
  ul {
    display: flex;
  }

  ul > li > p {
    font-size: 15px;
    margin: 8px;
  }
`;

const Slides = styled.div`
  display: flex;
  justify-content: center;
  button {
    border: none;
    width: 50px;
    height: 50px;
    margin: auto 10px;
    border-radius: 15px;
    cursor: pointer;
  }
  button:hover {
    background-color: rgb(165, 165, 165);
  }
`;
