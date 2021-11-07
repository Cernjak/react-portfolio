import styled, { keyframes } from 'styled-components';
import { rgba } from 'polished';

const scroll = keyframes`
    from {
        background-position: top;
    }
    to {
        background-position: bottom;
    }
`;

export const StyledProject = styled.a`
	display: block;
	position: relative;
	padding-top: 60%;
	border: 4px solid #00ffff;
	border-radius: 6px;
	background-image: url(${(props) => props.$img});
	background-size: 100% auto;
	animation: ${scroll} 40s linear alternate infinite;
	text-decoration: none;
	transition: 0.5s;
	overflow: hidden;

	&::after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: ${rgba('#05091e', 0.9)};
		transition: 0.3s;
	}

	&:hover {
		background-size: 110% auto;
		&::after {
			background: ${rgba('#05091e', 0)};
		}
		span {
			opacity: 0;
		}
	}

	span {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 90%;
		text-align: center;
		transform: translate(-50%, -50%);
		font-size: 3rem;
		color: white;
		z-index: 1;
		opacity: 1;
		transition: 0.3s;
		text-transform: uppercase;
	}
`;
