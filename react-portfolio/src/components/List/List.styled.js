import styled from 'styled-components';

export const StyledList = styled.ul`
	display: flex;
	justify-content: space-around;

	& > li {
		width: 33.3%;
	}

	ul {
		margin-bottom: 1rem;
		& li {
			position: relative;
			padding-left: 2.2rem;
			font-size: 2.8rem;
			&::before {
				content: '';
				position: absolute;
				left: 0;
				top: 1.3rem;
				display: block;
				border: 2px solid #ffffff;
				border-radius: 50%;
				width: 1rem;
				height: 1rem;
			}

			& li {
				font-size: 1.8rem;
				&::before {
					top: 0.4rem;
					border-width: 0 0 2px 2px;
					border-radius: 0;
					width: 0.8rem;
					height: 0.8rem;
				}
			}
		}
	}

	span {
		display: inline-block;
		margin-bottom: 0.8rem;
	}
`;
