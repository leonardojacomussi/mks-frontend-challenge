import {
  FC,
  HTMLAttributes
} from "react";
import { Container } from "./styles";
import { IconButton } from "@mui/material";
import useCartContext from "@/hooks/useCartContext";
import CartIcon from "../../../public/assets/CartIcon";
import useFirstRender from "@/hooks/useFirstRender";

const Header: FC<HTMLAttributes<HTMLElement>> = (props): JSX.Element => {
  const { cart } = useCartContext();
  const firstRenter = useFirstRender();

  return (
    <Container {...props}>
      <h1>
        MKS <span>Sistemas</span>
      </h1>
      <IconButton>
        <CartIcon />{" "} {firstRenter ? 0 : cart.items.reduce((acc, item) => acc + item.quantity, 0)}
      </IconButton>
    </Container>
  );
};

export default Header;