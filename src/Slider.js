import styled from "styled-components";
import { useEffect, useState } from "react";
import { sliderInfo } from "./sliderInfo";

function Slider() {
  const trackWidth = 1254;
  const [order, setOrder] = useState(1);

  const [style, setStyle] = useState({
    //트릭 데이터로 인한 조정
    transform: `translateX(-${trackWidth}px)`,
  });

  useEffect(() => {
    let moveWidth = order * trackWidth;
    setStyle({
      transform: `translateX(-${moveWidth}px)`,
      transition: `all 0.3s ease-in-out`,
    });
  }, [order]);

  function move(where) {
    //왼쪽 클릭시.
    if (where === -1) {
      setOrder((prevState) => prevState - 1);
      console.log(order);
    } else {
      //오른쪽 클릭시.
      setOrder((prevState) => prevState + 1);
      //마지막이면?
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
      <button onClick={() => move(-1)}>〈</button>
      <button onClick={() => move(1)}>〉</button>
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
