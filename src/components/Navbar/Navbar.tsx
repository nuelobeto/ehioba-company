import { useEffect, useState } from "react";
import { LOGO } from "../../assets/images";
import {
  Logo,
  Nav,
  NavContainer,
  NavLinks,
  NavLink,
  Container,
  OpenBtn,
  CloseBtn,
} from "./styles";
import { navLinks } from "../../utils/constants";
import SideNav from "../SideNav/SideNav";

const Navbar = () => {
  const [viewportWidth, setViewPortWidth] = useState(window.innerWidth);
  const [openSideNav, setOpenSideNav] = useState(false);
  const [scrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setViewPortWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, [viewportWidth]);

  useEffect(() => {
    window.onscroll = function () {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  }, []);

  return (
    <>
      <Nav $scrolled={scrolled}>
        <NavContainer style={Container}>
          <Logo>
            <img src={LOGO} alt="logo" />
          </Logo>
          {viewportWidth < 850 ? (
            <>
              {!openSideNav && (
                <OpenBtn
                  $scrolled={scrolled}
                  onClick={() => setOpenSideNav(!openSideNav)}
                />
              )}
              {openSideNav && (
                <CloseBtn
                  $scrolled={scrolled}
                  onClick={() => setOpenSideNav(!openSideNav)}
                />
              )}
              <SideNav
                openSideNav={openSideNav}
                setOpenSideNav={setOpenSideNav}
              />
            </>
          ) : (
            <NavLinks>
              {navLinks.map((link, index) => (
                <NavLink to={`/${link}`} key={index}>
                  {link}
                </NavLink>
              ))}
            </NavLinks>
          )}
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
