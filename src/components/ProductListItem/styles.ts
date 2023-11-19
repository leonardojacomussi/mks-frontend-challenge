import { HTMLAttributes } from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import { HTMLMotionProps, motion } from "framer-motion";

export const Container = styled(motion.li)<HTMLMotionProps<"li">>`
  width: 100%;
  max-width: 37.9rem;
  height: auto;
  position: relative;

  display: flex;
  gap: 2.1rem;
  align-items: center;
  justify-content: space-between;

  border-radius: ${({ theme }) => theme.border.radius};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const CardImage = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: auto;
    height: 6.1rem;
    object-fit: cover;
  };
`;

export const CardTitle = styled.h3<HTMLAttributes<HTMLHeadingElement>>`
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.7rem;

  color: ${({ theme }) => theme.colors.gray[300]};
`;

export const CardPrice = styled.span<HTMLAttributes<HTMLSpanElement>>`
  width: 100%;
  height: auto;

  color: ${({ theme }) => theme.colors.black};
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.7rem;
`;

export const AddOrRemoveButton = styled.div<HTMLAttributes<HTMLDivElement>>`
  grid-row: 1 / 1;
  grid-column: 2 / 2;
  width: 9.8rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: .5rem;
  justify-self: flex-end;
  position: relative;
  border: 0.3px solid #BFBFBF;
  border-radius: 0.4rem;

  span {
    color: ${({ theme }) => theme.colors.black};
    font-size: 0.8rem;
    font-weight: 400;
    padding: 0.5rem;
    border-left: 0.3px solid #BFBFBF;
    border-right: 0.3px solid #BFBFBF;
  };

  button {
    padding: 0.5rem;
    border: none;
    width: 1.2rem;
    height: 1.2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: transparent;

    svg {
      width: 1.2rem;
      height: 1.2rem;
      fill: ${({ theme }) => theme.colors.black};
    };
  };

  &::before {
    content: "Qtd:";
    position: absolute;
    left: 0;
    top: -1rem;
    font-size: 0.5rem;
    color: ${({ theme }) => theme.colors.black};
  };
`;

export const RemoveButton = styled(IconButton)`
  width: 1.8rem;
  height: 1.8rem;
  position: absolute;
  top: -2.9rem;
  right: -.8rem;
`;