import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: 100vh;
  position: relative;

  display: flex;
  gap: 5rem;
  flex-direction: column;
`;