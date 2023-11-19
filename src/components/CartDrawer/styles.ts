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

export const List = styled(motion.ul)<HTMLMotionProps<"li">>`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: auto;
	row-gap: 2.3rem;
	padding-top: 7rem;
	padding-left: 1rem;
	padding-right: 1rem;

	@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding-left: 4.7rem;
		padding-right: 0;
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