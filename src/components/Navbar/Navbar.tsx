import { useEffect, useState } from "react";
import { LOGO } from "../../assets/icons";
import {
  Logo,
  Nav,
  NavContainer,
  NavLinks,
  NavLink,
  Container,
  iconStyles,
} from "./styles";
import { navLinks } from "../../utils/constants";
import {
  AiOutlineMenuFold as OpenIcon,
  AiOutlineMenuUnfold as CloseIcon,
} from "react-icons/ai";
import SideNav from "../SideNav/SideNav";

const Navbar = () => {
  const [viewportWidth, setViewPortWidth] = useState(window.innerWidth);
  const [openSideNav, setOpenSideNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setViewPortWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, [viewportWidth]);

  return (
    <>
      <Nav>
        <NavContainer style={Container}>
          <Logo>
            <img src={LOGO} alt="logo" />
          </Logo>
          {viewportWidth < 850 ? (
            <>
              {!openSideNav && (
                <OpenIcon
                  style={iconStyles}
                  onClick={() => setOpenSideNav(!openSideNav)}
                />
              )}
              {openSideNav && (
                <CloseIcon
                  style={iconStyles}
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
