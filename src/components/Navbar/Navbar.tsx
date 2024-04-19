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
import { useLocation, useNavigate } from "react-router-dom";
import { COLORS } from "../../utils/colors";

const Navbar = () => {
	const [viewportWidth, setViewPortWidth] = useState(window.innerWidth);
	const [openSideNav, setOpenSideNav] = useState(false);
	const [scrolled, setIsScrolled] = useState(false);
	const { pathname } = useLocation();

	useEffect(() => {
		const handleResize = () => {
			setViewPortWidth(window.innerWidth);
		};
		window.addEventListener("resize", handleResize);
	}, [viewportWidth]);

	const navigate = useNavigate();

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
					<Logo onClick={() => navigate("/home")}>
						<img src={LOGO} alt="logo" />
					</Logo>
					{viewportWidth < 850 ? (
						<>
							{!openSideNav && (
								<OpenBtn
									$scrolled={scrolled}
									onClick={() => setOpenSideNav(!openSideNav)}
									style={{
										color: `${
											pathname.includes("post-details") && COLORS.black
										}`,
									}}
								/>
							)}
							{openSideNav && (
								<CloseBtn
									$scrolled={scrolled}
									onClick={() => setOpenSideNav(!openSideNav)}
									style={{
										color: `${
											pathname.includes("post-details") && COLORS.black
										}`,
									}}
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
								<NavLink
									to={`/${link.url}`}
									key={index}
									style={{
										color: `${
											pathname.includes("post-details") && COLORS.black
										}`,
									}}>
									{link.text}
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
