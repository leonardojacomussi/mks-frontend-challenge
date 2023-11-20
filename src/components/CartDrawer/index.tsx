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
import { useTheme, DefaultTheme } from "styled-components";
import ProductListItem from "@/components/ProductListItem";
import { useStyles, Header, EmptyCart, List, Footer } from "./styles";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { numberToCurrency } from "@/utils/tools";

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
  const { classes } = useStyles({ SCTheme: theme });
  const [heightWindow, setHeightWindow] = useState<number>(0);
  const { openModal, handleCloseModal, cart } = useCartContext();

  useEffect(() => {
    const handleHeightWindow = () => {
      setHeightWindow(window.innerHeight);
    };

    if (window) {
      setHeightWindow(window.innerHeight);
      window.addEventListener("resize", handleHeightWindow);
    };

    () => {
      window.removeEventListener("resize", handleHeightWindow);
    };
  }, []);

  const handleDrawerCloseOutside = (
    event: MouseEvent | KeyboardEvent | Event | {}, reason: string
  ) => {
    if (reason === "clickaway") {
      return;
    };
    handleCloseModal();
  };

  useEffect(() =>  {
    const options = document.getElementsByClassName("price");
    for (let index = 0; index < options.length; ++index) {
      options[index].innerHTML = options[index].innerHTML.replace(/\&nbsp;/g, "");
    };
  }, []);

  if (firstRender) return <></>;

  return (
    <Drawer
      variant="temporary"
      anchor="right"
      data-testid="drawer"
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
        <>
          <List
            variants={container}
            initial="hidden"
            animate="visible"
            $height={heightWindow}
          >
            {
              cart.items.map((product: ProductOnCart, index: number) => (
                <ProductListItem key={product.id} product={product} variants={item} />
              ))
            }
          </List>
          <Footer>
            <div className="total">
              <span>Total</span>
              <span className="price">{numberToCurrency(cart.total)}</span>
            </div>
            <button>Finalizar Compra</button>
          </Footer>
        </>
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