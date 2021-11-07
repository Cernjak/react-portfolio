import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import { StyledHeader, StyledList } from './Header.styled';

const links = [
	{
		text: 'Home',
		link: '/',
	},
	{
		text: 'About me',
		link: '/about',
	},
	{
		text: 'Contact',
		link: '/contact',
	},
];

function Header() {
	return (
		<StyledHeader>
			<div className='wrap'>
				<h1 className='Logo'>
					Igor <br /> Černjak
				</h1>
				<nav>
					<StyledList>
						{links.map((link, i) => (
							<CustomLink
								key={i}
								to={link.link}
								style={{ animationDelay: i * 150 + 'ms' }}
							>
								{link.text}
							</CustomLink>
						))}
					</StyledList>
				</nav>
			</div>
		</StyledHeader>
	);
}

export default Header;
