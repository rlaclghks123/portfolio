import React, { Children, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const CarouselContainer = styled.div`
  @media screen and (max-width: 700px) {
    width: 200px;
    height: 90%;
  }
  width: 400px;
  position: relative;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  border-radius: 10px;
`;

const NavigationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: transparent;
  z-index: 5;
`;

const CarouselItemsWrapper = styled.div`
  width: ${({ translateXAmountLimit }) => `${translateXAmountLimit}px`};
  height: 100%;
  display: flex;
  transform: translateX(${({ translateXAmount }) => `${translateXAmount}px`});
  transition: transform 0.7s ease-in-out;
`;

const Button = styled.button`
  background-color: inherit;
  border: none;
  color: ${(props) => props.theme.textColor};
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

function Carousel({
  autoPlay = true,
  autoPlayDuration = 2000,
  children,
  itemWidth = 400,
  ...others
}) {
  const [translateXAmount, setTranslateXAmount] = useState(0);
  const itemCount = Children.toArray(children).length;
  const translateXAmountLimit = itemCount * itemWidth;

  const onClickLeft = () => {
    const newTranslateXAmount = (translateXAmount + itemWidth) % translateXAmountLimit;
    setTranslateXAmount(
      (newTranslateXAmount > 0 ? -translateXAmountLimit : 0) + newTranslateXAmount
    );
  };

  const onClickRight = useCallback(() => {
    setTranslateXAmount((translateXAmount - itemWidth) % translateXAmountLimit);
  }, [translateXAmount, itemWidth, translateXAmountLimit]);

  useEffect(() => {
    setTranslateXAmount(0);
  }, [itemWidth]);

  useEffect(() => {
    let timer = autoPlay ? setTimeout(onClickRight, autoPlayDuration) : 0;
    return () => {
      if (timer !== 0) clearTimeout(timer);
    };
  }, [translateXAmount, onClickRight, autoPlay, autoPlayDuration]);

  return (
    <CarouselContainer itemWidth={itemWidth} {...others}>
      <NavigationWrapper itemWidth={itemWidth}>
        <Button onClick={onClickLeft}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Button>

        <Button onClick={onClickRight}>
          <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </NavigationWrapper>

      <CarouselItemsWrapper
        translateXAmountLimit={translateXAmountLimit}
        translateXAmount={translateXAmount}
      >
        {children}
      </CarouselItemsWrapper>
    </CarouselContainer>
  );
}

export default Carousel;
