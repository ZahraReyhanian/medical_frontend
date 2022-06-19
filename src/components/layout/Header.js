import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState, useContext } from "react";
import styled from "styled-components";
import {
  menuData,
  menuDataHamburger,
  menuDataHamburgerAuthUser,
  tooltipDataAuthUser,
} from "../data/menuData";
import { tooltipData } from "../data/menuData";
import MenuButton from "../buttons/MenuButton";
import MenuTooltip from "../tooltips/MenuTooltip";
import AuthContext from "../context/AuthContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenh, setIsOpenh] = useState(false);
  const ref = useRef();
  const tooltipRef = useRef();
  const hamburgerRef = useRef();

  let { user, logoutUser } = useContext(AuthContext);

  function hamburgerHandleClick(event) {
    setIsOpenh(!isOpenh);
    event.preventDefault();
  }

  function handleClick(event) {
    setIsOpen(!isOpen);
    event.preventDefault();
  }

  function handleClickOutside(event) {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      !tooltipRef.current.contains(event.target) &&
      !hamburgerRef.current.contains(event.target)
    ) {
      setIsOpen(false);
      setIsOpenh(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Wrapper>
      <Link to="/">
        <LogoWrapper src="/images/logos/logo.svg" alt="logo" />
      </Link>
      <MenuWrapper count={menuData.length} ref={ref}>
        {menuData.map((item) =>
          item.link === "/account" ? (
            <MenuButton item={item} onClick={(event) => handleClick(event)} />
          ) : (
            <MenuButton item={item} />
          )
        )}
        <HamburgerWrapper>
          <MenuButton
            item={{ title: "", icon: "/images/icons/hamburger.svg", link: "/" }}
            onClick={(event) => hamburgerHandleClick(event)}
          />
        </HamburgerWrapper>
      </MenuWrapper>
      <div ref={hamburgerRef}>
        <MenuTooltip
          data={user ? menuDataHamburgerAuthUser : menuDataHamburger}
          isOpen={isOpenh}
        />
      </div>
      <div ref={tooltipRef}>
        <MenuTooltip
          data={user ? tooltipDataAuthUser : tooltipData}
          isOpen={isOpen}
        />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 44px auto;
  width: 100%;
  justify-content: space-between;
  padding: 15px 35px;
  align-items: center;

  @media (max-width: 760px) {
    top: 30px;
  }
  @media (max-width: 450px) {
    top: 20px;
    padding: 0 20px;
  }
`;

const LogoWrapper = styled.img`
  height: 5rem;
`;

const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${(props) => props.count}, auto);
  align-items: center;

  @media (max-width: 760px) {
    > a {
      display: none;
    }
    grid-template-columns: auto;
  }
`;

const HamburgerWrapper = styled.div`
  display: none;

  @media (max-width: 760px) {
    display: block;
  }
`;
