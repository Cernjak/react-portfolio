import styled, { keyframes } from 'styled-components';

const fadeTop = keyframes`
	from {
		opacity: 0;
		transform: translateY(-50px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`;

export const StyledHeader = styled.header`
	padding-top: 32px;

	.wrap {
		display: flex;
		align-items: center;
	}

	.Logo {
		position: relative;
		display: inline-block;
		font-size: 7.2rem;
		text-transform: uppercase;

		&::after {
			content: '';
			position: absolute;
			top: calc(100% + 8px);
			left: 0;
			right: 0;
			height: 6px;
			background-color: #00ffff;
			box-shadow: 0 0 15px #00ffff;
		}
	}

	nav {
		margin-left: auto;
	}
`;

export const StyledList = styled.ul`
	display: flex;
	align-items: center;
	font-size: 2.4rem;
	font-weight: 700;
	margin-right: -32px;

	li {
		flex: 0 0 auto;
	}

	a {
		display: block;
		margin: 0 32px;
		text-decoration: none;
		opacity: 0;
		transform: translateY(-50px);
		animation: ${fadeTop} 0.5s forwards;
	}

	li:last-of-type {
		transition: 0.2s;

		&:hover {
			transform: scale(1.05);
		}

		a {
			padding: 12px 24px;
			background: #00ffff;
			color: black;
			border-radius: 6px;
			box-shadow: 0 0 15px #00ffff;
		}
	}

	li:not(:last-of-type) {
		a {
			position: relative;
			color: #fff;
			padding: 4px 0;

			&::after {
				content: '';
				position: absolute;
				top: calc(100% + 4px);
				left: 0;
				right: 0;
				height: 3px;
				background: #00ffff;
				box-shadow: 0 0 15px #00ffff;
				transform: scaleX(0);
				transform-origin: left;
				transition: 0.2s;
			}
			&:hover {
				&::after {
					transform: scale(1);
				}
			}
		}
	}
	li:not(:last-of-type).active a::after {
		transform: scale(1);
	}
`;
