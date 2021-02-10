import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledNavbar, StyledUL, StyledLi } from './styled';
import './Header.css';
const Header: React.FC = () => {
	return (
		<StyledNavbar>
			<StyledUL>
				<StyledLi>
					<NavLink to="/">Todo Page</NavLink>
				</StyledLi>
				<StyledLi>
					<NavLink to="/details">Details Page</NavLink>
				</StyledLi>
			</StyledUL>
		</StyledNavbar>
	);
};

export default Header;
