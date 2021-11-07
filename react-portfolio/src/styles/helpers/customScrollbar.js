import { css } from 'styled-components';

export const customScrollbar = (isHorizontal = false) => css`
	&::-webkit-scrollbar {
		width: ${isHorizontal ? '100%' : '8px'};
		height: ${isHorizontal ? '8px' : '100%'};
	}

	&::-webkit-scrollbar-track {
		box-shadow: inset 0 0 100px black;
	}

	&::-webkit-scrollbar-thumb {
		background: #00ffff;
		border-radius: 5px;
	}
`;
