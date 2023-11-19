import styled from "styled-components";
import { HTMLAttributes, ButtonHTMLAttributes } from "react";

export const Card = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 22rem;
  height: 28.5rem;
  position: relative;

  padding: 1.4rem;

  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  padding-bottom: 3.84rem;

  border-radius: ${({ theme }) => theme.border.radius};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
`;

export const CardImage = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: auto;
    height: 13.8rem;
    object-fit: cover;
  };
`;


export const CardTitleAndPrice = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: auto;

  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.9rem;

    color: ${({ theme }) => theme.colors.gray[300]};
  };

  div {
    width: fit-content;
    height: auto;

    padding: .5rem 1rem;

    color: ${({ theme }) => theme.colors.white};
    border-radius: .5rem;
    background-color: ${({ theme }) => theme.colors.gray[200]};
  };
`;

export const CardDescription = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: auto;

  p {
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.2rem;
    color: ${({ theme }) => theme.colors.gray[300]};

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  };
`;

export const CardAction = styled.button<ButtonHTMLAttributes<HTMLButtonElement>>`
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 0;

  border: none;
  background-color: ${({ theme }) => theme.colors.gray[50]};
  border-bottom-left-radius: ${({ theme }) => theme.border.radius};
  border-bottom-right-radius: ${({ theme }) => theme.border.radius};

  display: flex;
  gap: 1.4rem;
  align-items: center;
  justify-content: center;

  padding: 1rem;

  svg {
    width: 1.35rem;
    height: auto;
    fill: none;
    stroke: ${({ theme }) => theme.colors.white};
  };
`;