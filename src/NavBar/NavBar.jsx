import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Time from '../cover/Time';

const NavBarWrapper = styled(motion.div)`
  width: 100%;
  height: 50px;
  background: ${(props) => props.theme.navBgColor};
  color: ${(props) => props.theme.navColor};
  border-bottom: 0.1px solid rgba(44, 62, 80, 0.4);
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
`;

const NavLogo = styled(motion.div)`
  padding: 3px;
  margin: 0px 15px;
  cursor: pointer;
  box-shadow: 0px 0px 3px ${(props) => props.theme.navColor};
  svg {
    width: 15px;
    height: 15px;
    fill: ${(props) => props.theme.textColor};
    stroke-width: 25px;
    stroke: ${(props) => props.theme.navBgColor};
  }
`;

const NavUl = styled.ul`
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const NavLi = styled.li`
  margin: 0px auto;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

function NavBar() {
  return (
    <NavBarWrapper>
      <Link to="/">
        <NavLogo>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <motion.path d="M329.1 142.9c-62.5-62.5-155.8-62.5-218.3 0s-62.5 163.8 0 226.3s155.8 62.5 218.3 0c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3c-87.5 87.5-221.3 87.5-308.8 0s-87.5-229.3 0-316.8s221.3-87.5 308.8 0c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <motion.path d="M320 256l0 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V192L64 192 64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-192 256 0z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <motion.path d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96h96V416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H192V96h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H160 32z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <motion.path d="M0 448c0 17.7 14.3 32 32 32s32-14.3 32-32H0zM32 64L58.6 46.2c-7.8-11.7-22.4-17-35.9-12.9S0 49.9 0 64l32 0zM224 352l-26.6 17.8c5.9 8.9 15.9 14.2 26.6 14.2s20.7-5.3 26.6-14.2L224 352zM416 64h32c0-14.1-9.2-26.5-22.7-30.6s-28.1 1.1-35.9 12.9L416 64zM384 448c0 17.7 14.3 32 32 32s32-14.3 32-32H384zM64 448V64H0V448H64zM5.4 81.8l192 288 53.3-35.5-192-288L5.4 81.8zm245.3 288l192-288L389.4 46.2l-192 288 53.3 35.5zM384 64V448h64V64H384z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <motion.path d="M253.5 51.7C248.6 39.8 236.9 32 224 32s-24.6 7.8-29.5 19.7l-120 288-40 96c-6.8 16.3 .9 35 17.2 41.8s35-.9 41.8-17.2L125.3 384H322.7l31.8 76.3c6.8 16.3 25.5 24 41.8 17.2s24-25.5 17.2-41.8l-40-96-120-288zM296 320H152l72-172.8L296 320z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <motion.path d="M0 448c0 17.7 14.3 32 32 32s32-14.3 32-32H0zM32 64L56.6 43.5C48 33.2 33.8 29.3 21.1 33.9S0 50.5 0 64l32 0zM352 448l-24.6 20.5c8.6 10.3 22.8 14.2 35.5 9.6s21.1-16.6 21.1-30.1H352zM384 64c0-17.7-14.3-32-32-32s-32 14.3-32 32h64zM64 448V64H0V448H64zM7.4 84.5l320 384 49.2-41-320-384L7.4 84.5zM384 448V64H320V448h64z" />
          </svg>
        </NavLogo>
      </Link>
      <NavUl>
        <NavLi>
          <Link to="/">About</Link>
        </NavLi>
        <NavLi>
          <Link to="/projects">Projects</Link>
        </NavLi>
      </NavUl>

      <Time />
    </NavBarWrapper>
  );
}

export default NavBar;
