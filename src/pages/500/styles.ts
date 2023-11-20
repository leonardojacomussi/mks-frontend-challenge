import styled from "styled-components";
import { HTMLAttributes } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: auto;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

interface MainProps extends HTMLMotionProps<"main"> {
  $height: number;
};

export const Main = styled(motion.main)<MainProps>`
  width: 100%;
  height: 100%;
  min-height: ${({ $height }) => `calc(${$height}px - 10.1rem - 3.4rem)`};

  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  align-items: center;
  justify-content: center;

  padding: 6.8rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 22rem);
  };

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 22rem);
  };

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, 22rem);
  };
`;

export const H1 = styled(motion.h1)<HTMLMotionProps<"h1">>`
  font-size: 4.8rem;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.colors.blue};
`;

export const H2 = styled(motion.h1)<HTMLMotionProps<"h2">>`
  font-size: 3.6rem;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.colors.blue};
`;

