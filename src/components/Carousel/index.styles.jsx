import styled from 'styled-components';

export const CarouselContainer = styled.div`
  @media screen and (max-width: 700px) {
    width: 300px;
    height: 90%;
  }
  width: 400px;
  position: relative;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  border-radius: 10px;
`;

export const NavigationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: transparent;
  z-index: 5;
`;

export const CarouselItemsWrapper = styled.div`
  width: ${({ translateXAmountLimit }) => `${translateXAmountLimit}px`};
  height: 100%;
  display: flex;
  transform: translateX(${({ translateXAmount }) => `${translateXAmount}px`});
  transition: transform 0.7s ease-in-out;
`;

export const Button = styled.button`
  background-color: inherit;
  border: none;
  color: ${(props) => props.theme.textColor};
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
