import React from 'react';
import { StyledList } from '../List/List.styled';
import { StyledLabel } from '../../styles/layout/layout';
import { StyledAbout } from './About.styled';
import Project from '../Project/Project';

import chocomel from '../../assets/images/chocomel.jpg';
import campina from '../../assets/images/campina.jpg';
import debic from '../../assets/images/debic.jpg';
import lattiz from '../../assets/images/lattiz.jpg';
import frico from '../../assets/images/frico.jpg';
import hollandMaster from '../../assets/images/holland-master.jpg';
import parrano from '../../assets/images/parrano.jpg';
import kroon from '../../assets/images/kroon.jpg';
import services from '../../assets/images/services.jpg';
import proteinTest from '../../assets/images/protein-test.jpg';

const projects = [
	{
		title: 'Chocomel',
		img: chocomel,
		url: 'https://www.chocomel.com/en-gb',
	},
	{
		title: 'Protein breakfast test',
		img: proteinTest,
		url: 'https://www.proteinbreakfasttest.com/',
	},
	{
		title: 'Campina UK',
		img: campina,
		url: 'https://www.campina.co.uk/',
	},
	{
		title: 'Debic',
		img: debic,
		url: 'https://www.debic.com/en',
	},
	{
		title: 'Lattiz',
		img: lattiz,
		url: 'https://www.lattiz.com/en',
	},
	{
		title: 'Frico',
		img: frico,
		url: 'https://www.frico.com/en',
	},
	{
		title: 'Holland Master',
		img: hollandMaster,
		url: 'https://www.hollandmaster.com/en',
	},
	{
		title: 'Parrano',
		img: parrano,
		url: 'https://www.parrano.com/en',
	},
	{
		title: 'Kroon',
		img: kroon,
		url: 'https://www.krooncheese.com/en',
	},
	{
		title: 'Frieslandcampina Services',
		img: services,
		url: 'https://www.frieslandcampinaservices.com/',
	},
];

const list = {
	experience: [
		{
			title: 'Vega IT',
			items: [
				{
					title: 'Front-end developer',
					items: [
						{
							title: '2019-Present',
						},
					],
				},
			],
		},
		{
			title: 'DuoBit',
			items: [
				{
					title: 'Computer service technician',
					items: [
						{
							title: '2016',
						},
					],
				},
			],
		},
	],
	education: [
		{
			title: 'Power electronics and electrical machines',
			items: [
				{
					title: 'Faculty of technical sciences',
					items: [
						{
							title: '2010-On hold',
						},
					],
				},
			],
		},
		{
			title: 'Computer technician',
			items: [
				{
					title: 'Electrotechnical school Mihajlo Pupin',
					items: [
						{
							title: '2006 - 2010',
						},
					],
				},
			],
		},
	],
};

const output = Object.keys(list).map((item, i) => (
	<li key={i}>
		<StyledLabel>{item}</StyledLabel>
		<ul>
			{list[item].map((item, i) => (
				<li key={i}>
					<span>{item.title}</span>
					{!item.items.length ? null : (
						<ul>
							{item.items.map((item, i) => (
								<li key={i}>
									<span>{item.title}</span>
									{!item.items.length ? null : (
										<ul>
											{item.items.map((item, i) => (
												<li key={i}>
													<span>{item.title}</span>
												</li>
											))}
										</ul>
									)}
								</li>
							))}
						</ul>
					)}
				</li>
			))}
		</ul>
	</li>
));

export default function About() {
	return (
		<StyledAbout>
			<div className='wrap'>
				<StyledLabel>About me:</StyledLabel>
				<p>
					Hi my name is Igor. I am a front-end developer from Novi Sad with over
					two years of experience.I am currently working at Vega IT. For the
					past year an a half I have been on a dedicated team. On this project
					we have created over 10 Drupal websites for the client. In my career I
					had the pleasure of working on Drupla, Wordpress, Umbraco, Sitecore
					and SalesForce projects.
				</p>
				<div class='list-container'>
					<StyledList>{output}</StyledList>
				</div>
				<StyledLabel>Projects I worked on:</StyledLabel>
				<div className='grid'>
					{projects.map((project, i) => (
						<Project
							key={i}
							img={project.img}
							url={project.url}
							title={project.title}
						/>
					))}
				</div>
			</div>
		</StyledAbout>
	);
}
