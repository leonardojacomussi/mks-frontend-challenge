import { HTMLAttributes } from "react";
import { makeStyles } from "tss-react/mui";
import { motion, HTMLMotionProps } from "framer-motion";
import styled, { DefaultTheme } from "styled-components";

export const useStyles = makeStyles<{ SCTheme: DefaultTheme }>()((theme, { SCTheme }) => {
	return {
		drawer: {
			width: "100%",
			padding: "3.6rem 2.2rem 4.7rem 4.7rem",
			flexShrink: 0,
			position: "relative",
			"& .MuiDrawer-paper": {
				background: `${SCTheme.colors.blue} !important`,
				color: SCTheme.colors.white,
				width: "100% !important",
			},
			"@media (min-width: 576px)": {
				width: "486px !important",
				"& .MuiDrawer-paper": {
					width: "486px !important",
				},
			},
		},
	};
});

export const Header = styled.header<HTMLAttributes<HTMLElement>>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: auto;
	padding: 3.6rem 2.2rem 0 2.2rem;

	h2 {
		font-weight: 700;
		font-size: 2.7rem;
		color: ${({ theme }) => theme.colors.white};
	};

	button {
		width: 3.8rem;
		height: 3.8rem;

		img {
			width: 3.8rem;
			height: 3.8rem;
		};
	};

	@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 3.6rem 2.2rem 0 4.7rem;
	};
`;

interface ListProps extends HTMLMotionProps<"li"> {
	$height: number;
};

export const List = styled(motion.ul)<ListProps>`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: auto;
	row-gap: 2.3rem;
	padding: 7rem 1rem 3rem 1rem;

	max-height: ${({ $height }) => `calc(${$height}px - 10.16rem - 18.94rem)`};
	overflow-y: auto;

	/* Track */
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.blue};
  };

	@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 7rem 0 3rem 4.7rem;
	};
`;

export const Footer = styled.footer<HTMLAttributes<HTMLElement>>`
	display: flex;
	width: 100%;
	flex-direction: column;
	position: absolute;
	bottom: 0;
	left: 0;

	.total {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: auto;
		padding: 2.2rem 2.2rem 4.2rem 2.2rem;

		font-size: 2.8rem;
		font-weight: 700;
	};

	button {
		border: none;
		width: 100%;
		height: 9.7rem;
		flex-shrink: 0;

		text-align: center;
		font-size: 2.8rem;
		font-weight: 700;

		background-color: ${({ theme }) => theme.colors.black};
	};

	@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		.total {
			padding: 2.2rem 4.7rem 3.6rem 4.7rem;
		};
	};
`;

export const EmptyCart = styled.div<HTMLAttributes<HTMLDivElement>>`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: left;
	margin: auto;
	width: 100%;
	height: 100%;
	gap: 2rem;
`;