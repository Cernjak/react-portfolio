import React from 'react';
import { StyledProject } from './Project.styled';

export default function Project({ img, url, title }) {
	return (
		<div>
			<StyledProject href={url} target='_blank' rel='noreferrer' $img={img}>
				<span>{title}</span>
			</StyledProject>
		</div>
	);
}
