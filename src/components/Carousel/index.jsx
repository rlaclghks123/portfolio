import React, { Children, useCallback, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { CarouselContainer, NavigationWrapper, CarouselItemsWrapper, Button } from './index.styles';

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
