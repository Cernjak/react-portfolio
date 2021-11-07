import styled, { keyframes } from 'styled-components';

const fadeLeft = keyframes`
	from {
		opacity: 0;
		transform: translateX(-50px);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
`;

const fadeBottom = keyframes`
	from {
		opacity: 0;
		transform: translateY(50px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`;

const spin = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;

export const StyledHome = styled.section`
	display: flex;
	flex: 1 0 100%;

	.wrap {
		width: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
	}

	img {
		width: 500px;
	}

	.App-logo {
		height: 40vmin;
		pointer-events: none;
		user-select: none;
		margin: 0 auto;
	}

	@media (prefers-reduced-motion: no-preference) {
		.App-logo {
			animation: ${spin} infinite 40s linear;
		}
	}
`;

export const StyledSkills = styled.ul`
	position: absolute;
	bottom: 0;
	left: 24px;
	padding: 64px 0;
	font-size: 48px;

	li {
		opacity: 0;
		transform: translateX(-50px);
		animation: ${fadeLeft} 0.5s forwards;
	}

	li:last-of-type {
		color: #00ffff;
		text-shadow: 0 0 15px #00ffff;
	}
`;

export const StyledSocial = styled.ul`
	display: flex;
	position: absolute;
	bottom: 0;
	right: 8px;
	padding: 64px 0;
	font-size: 48px;
	overflow: hidden;

	li {
		margin: 0 16px;
		opacity: 0;
		transform: translateY(50px);
		animation: ${fadeBottom} 0.5s forwards;
	}

	a {
		display: block;
		width: 40px;
		height: 40px;
	}

	span {
		position: absolute;
		visibility: hidden;
		font-size: 0;
		line-height: 0;
		height: 0;
		width: 0;
		margin-top: -1;
	}

	svg {
		width: 40px;
		height: 40px;
		transition: 0.3s;
		border-radius: 6px;

		&:hover {
			fill: #00ffff;
			box-shadow: 0 0 10px #00ffff;
		}
	}
`;
