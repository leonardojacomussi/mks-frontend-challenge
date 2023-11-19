import {
  FC,
  HTMLAttributes
} from "react";
import { Container } from "./styles";
import { IconButton } from "@mui/material";
import useCartContext from "@/hooks/useCartContext";
import useFirstRender from "@/hooks/useFirstRender";
import CartIcon from "../../../public/assets/CartIcon";

const Header: FC<HTMLAttributes<HTMLElement>> = (props): JSX.Element => {
  const { cart, handleCloseModal } = useCartContext();
  const firstRenter = useFirstRender();

  return (
    <Container data-testid="header" {...props}>
      <h1>
        MKS <span>Sistemas</span>
      </h1>
      <IconButton onClick={handleCloseModal}>
        <CartIcon data-testid="cart-icon" />{" "} {firstRenter ? 0 : cart.items.reduce((acc, item) => acc + item.quantity, 0)}
      </IconButton>
    </Container>
  );
};

export default Header;