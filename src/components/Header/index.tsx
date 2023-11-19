import {
  FC,
  HTMLAttributes
} from "react";
import { Container } from "./styles";
import { IconButton } from "@mui/material";
import CartIcon from "../../../public/assets/CartIcon";

const Header: FC<HTMLAttributes<HTMLElement>> = (props): JSX.Element => {
  return (
    <Container {...props}>
      <h1>
        MKS <span>Sistemas</span>
      </h1>
      <IconButton>
        <CartIcon />{" "} 0
      </IconButton>
    </Container>
  );
};

export default Header;