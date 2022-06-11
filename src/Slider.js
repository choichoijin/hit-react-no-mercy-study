import styled from "styled-components";
import { useState } from "react";
import { sliderInfo } from "./sliderInfo";

let order = 1;

function Slider() {
  const trackWidth = 1254;
  const [style, setStyle] = useState({
    //트릭 데이터로 인한 조정
    transform: `translateX(-${trackWidth}px)`,
  });

  //order가 바뀌면 transform으로 렌더링.
  // useEffect(() => {
  //   console.log(order);
  //   const moveWidth = order * trackWidth;
  //   if (order === 0 || order === 1 || order === 2) {
  //     moveStyle(moveWidth);
  //   }

  //   if (order < 0) {
  //     setTimeout(() => {
  //       setOrder(2);
  //       setStyle({
  //         transition: ``,
  //       });
  //       replaceSlide(moveWidth);
  //     }, 1000);
  //   }
  //   if (order > 3) {
  //     setOrder(1);
  //     setStyle({
  //       transition: ``,
  //     });
  //     setTimeout(() => replaceSlide(moveWidth), 1000);
  //   }
  // }, [order]);

  function moveStyle(distance) {
    setStyle({
      transform: `translateX(-${distance}px)`,
      transition: `all 0.3s ease-in-out`,
    });
  }

  function replaceSlide(distance) {
    setStyle({
      transform: `translateX(-${distance}px)`,
    });
  }

  function handleOrder(direction) {
    //왼쪽 클릭시.
    if (direction === -1) {
      order = order - 1;
    } else {
      //오른쪽 클릭시.
      order = order + 1;
    }
    moveStyle(order * trackWidth);

    //무한 루프 핸들링.
    if (order === 0) {
      setTimeout(() => replaceSlide(order * trackWidth), 301);
      order = 2;
    } else if (order === 3) {
      setTimeout(() => replaceSlide(order * trackWidth), 301);
      order = 1;
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
      <button onClick={() => handleOrder(-1)}>〈</button>
      <button onClick={() => handleOrder(1)}>〉</button>
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
