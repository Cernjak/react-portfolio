import styled, { keyframes } from 'styled-components';
import { StyledLabel } from '../../styles/layout/layout';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const StyledAbout = styled.section`
	position: relative;
	display: flex;
	flex: 1 0 100%;
	padding-top: 32px;
	opacity: 0;
	animation: ${fadeIn} 0.5s forwards;

	.wrap {
		max-width: 1200px;
	}

	p {
		font-size: 2.4rem;
	}

	.list-container {
		display: flex;
		flex-direction: column;
	}

	${StyledLabel} {
		margin-top: 80px;
	}

	.grid {
		display: flex;
		flex-wrap: wrap;
		margin: 0 -16px 64px;
		width: calc(100% + 32px);

		& > div {
			width: 33.3%;
			min-width: 360px;
			padding: 16px;
		}
	}
`;
