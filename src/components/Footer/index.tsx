import {
  FC,
  HTMLAttributes
} from "react";
import { Container } from "./styles";

const Footer: FC<HTMLAttributes<HTMLElement>> = (props): JSX.Element => {
  return (
    <Container data-testid="footer" {...props}>
      <p>MKS sistemas © Todos os direitos reservados</p>
    </Container>
  );
};

export default Footer;