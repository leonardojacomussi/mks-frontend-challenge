import {
  FC,
  HTMLAttributes
} from "react";
import { Container } from "./styles";

const Footer: FC<HTMLAttributes<HTMLDivElement>> = (props): JSX.Element => {
  return (
    <Container {...props}>
      <p>MKS sistemas © Todos os direitos reservados</p>
    </Container>
  );
};

export default Footer;