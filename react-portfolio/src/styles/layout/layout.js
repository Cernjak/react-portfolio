import styled from 'styled-components';

export const StyledLabel = styled.div`
	display: inline-block;
	position: relative;
	margin-bottom: 40px;
	font-size: 3.6rem;
	text-transform: uppercase;

	&::after {
		content: '';
		position: absolute;
		top: calc(100% + 4px);
		left: 0;
		right: 0;
		height: 3px;
		background: #00ffff;
		box-shadow: 0 0 15px #00ffff;
	}
`;
