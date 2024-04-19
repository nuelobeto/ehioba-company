import { OverLay, SideNavContainer, SideNavLinks, SideNavLink } from "./style";
import { SideNavProps } from "../../utils/types";
import { navLinks } from "../../utils/constants";

const SideNav = ({ openSideNav }: SideNavProps) => {
	return (
		<>
			<OverLay open={openSideNav}>
				<SideNavContainer>
					<SideNavLinks>
						{navLinks.map((link, index) => (
							<SideNavLink to={`/${link.url}`} key={index}>
								{link.text}
							</SideNavLink>
						))}
					</SideNavLinks>
				</SideNavContainer>
			</OverLay>
		</>
	);
};

export default SideNav;
