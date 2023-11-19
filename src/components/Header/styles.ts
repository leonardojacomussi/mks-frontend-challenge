import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.header<HTMLAttributes<HTMLElement>>`
  width: 100%;
  height: 10.1rem;

  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};

  h1 {
    display: flex;
    gap: 1rem;
    align-items: flex-end;
    font-size: 4rem;
    font-weight: 600;
    line-height: 4rem;

    span {
      font-size: 2rem;
      font-weight: 300;
      line-height: 2.7rem;
    };
  };

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    width: 9rem;
    height: 4.5rem;
    flex-shrink: 0;

    font-size: 1.8rem;
    font-weight: bold;

    border-radius: ${({ theme }) => theme.border.radius};
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};

    svg {
      width: 1.9rem;
      height: auto;
      fill: ${({ theme }) => theme.colors.black};
    };

    &:hover {
      background-color: ${({ theme }) => theme.colors.white};
    };
  };

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 4rem;
  };
`;