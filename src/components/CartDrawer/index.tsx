import {
  FC,
  useState,
  useEffect,
  HTMLAttributes,
} from "react";
import Image from "next/image";
import Drawer from "@mui/material/Drawer";
import { ProductOnCart } from "@/interfaces";
import IconButton from "@mui/material/IconButton";
import useCartContext from "@/hooks/useCartContext";
import useFirstRender from "@/hooks/useFirstRender";
import { useStyles, Header, EmptyCart, List } from "./styles";
import { useTheme, DefaultTheme } from "styled-components";
import ProductListItem from "@/components/ProductListItem";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const CartDrawer: FC<HTMLAttributes<HTMLDivElement>> = (props): JSX.Element => {
  const firstRender = useFirstRender();
  const theme: DefaultTheme = useTheme();
  const [href, setHref] = useState<string>("");
  const { classes } = useStyles({ SCTheme: theme });
  const { openModal, handleCloseModal, cart } = useCartContext();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (window) setHref(window.location.href);
  });

  const handleDrawerCloseOutside = (
    event: MouseEvent | KeyboardEvent | Event | {}, reason: string
  ) => {
    if (reason === "clickaway") {
      return;
    };
    handleCloseModal();
  };

  if (firstRender) return <></>;

  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={openModal}
      onClose={handleDrawerCloseOutside}
      classes={{ root: classes.drawer }}
    >
      <Header>
        <h2>Carrinho<br />de compras</h2>
        <IconButton onClick={handleCloseModal}>
          <Image src="/assets/Close.svg" width={18} height={18} alt="Fechar Carrinho"/>
        </IconButton>
      </Header>
      {
        openModal && cart.items.length > 0 &&
        <List
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {
            cart.items.map((product: ProductOnCart, index: number) => (
              <ProductListItem key={product.id} product={product} variants={item} />
            ))
          }
        </List>
      }
      {
        cart.items.length === 0 && (
          <EmptyCart>
            <h3>Carrinho vazio </h3> {" "}
            <RemoveShoppingCartIcon />
          </EmptyCart>
        )
      }
    </Drawer>
  );
}

export default CartDrawer;