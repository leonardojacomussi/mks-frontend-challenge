import styled from "styled-components";
import { HTMLAttributes } from "react";
import { motion } from "framer-motion";

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: auto;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Main = styled(motion.ul)<HTMLAttributes<HTMLUListElement>>`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 10.1rem - 3.4rem);

  display: grid;
  grid-template-columns: repeat(1, 22rem);
  gap: 3.1rem 2.2rem;
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