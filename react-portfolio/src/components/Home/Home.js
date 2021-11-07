import React from 'react';
import logo from '../../assets/images/logo.svg';
import { Facebook, Linkedin, Twitter } from '../../assets/icons/icons';
import { StyledHome, StyledSkills, StyledSocial } from './Home.styled';

const skills = ['JS', 'CSS', 'HTML', 'REACT.JS'];

const social = [
	{
		text: 'Visit my Linkedin',
		icon: <Linkedin />,
		link: 'https://www.linkedin.com/in/igor-%C4%8Dernjak-5568b9194/',
	},
	{
		text: 'Visit my Facebook',
		icon: <Facebook />,
		link: 'https://www.facebook.com/igor.cernjak/',
	},
	{
		text: 'Visit my Twitter',
		icon: <Twitter />,
		link: 'https://twitter.com/IgorCernjak',
	},
];

export default function Home() {
	return (
		<StyledHome>
			<div className='wrap'>
				<img src={logo} className='App-logo' alt='logo' />
				<StyledSkills>
					{skills.map((skill, i) => (
						<li key={i} style={{ animationDelay: i * 150 + 'ms' }}>
							{skill}
						</li>
					))}
				</StyledSkills>
				<StyledSocial>
					{social.map((item, i) => (
						<li key={i} style={{ animationDelay: i * 150 + 'ms' }}>
							<a
								href={item.link}
								target='_blank'
								rel='noreferrer'
								aria-label={item.text}
							>
								<span>{item.text}</span>
								{item.icon}
							</a>
						</li>
					))}
				</StyledSocial>
			</div>
		</StyledHome>
	);
}
