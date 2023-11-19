import {
  FC,
  useState,
  useEffect,
  ReactNode,
  createContext,
} from "react";
import {
  Cart,
  Product,
  CartContextType,
  ProductOnCart,
} from "@/interfaces";
import { useSnackbar } from "notistack";

const defaultCart: Cart = {
  items: [],
  total: 0,
};

const getStorageValue = (key: string, defaultValue: Cart = defaultCart): Cart => {
  // getting stored value
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(key);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.cupom && parsed.cupom.validity) {
        parsed.cupom.validity = new Date(parsed.cupom.validity);
      }
      return parsed as Cart
    } else {
      return defaultValue;
    };
  } else {
    return defaultValue;
  };
};

export const CartContext = createContext<CartContextType>({
  cart: JSON.parse(JSON.stringify(defaultCart)),
  openModal: false,
  handleCloseModal: () => null,
  updateCart: () => null,
});

export const CartContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [openCartModal, setOpenCartModal] = useState<boolean>(false);
  const [cart, setCart] = useState<Cart>(() => {
    return getStorageValue("msk-challenge-cart");
  });

  const handleCloseCartModal = () => setOpenCartModal(prev => !prev);

  useEffect(() => {
    // Update local storage
    localStorage.setItem("msk-challenge-cart", JSON.stringify(cart.items.length > 0 ? cart : defaultCart));
  }, [cart]);

  const updateCart = (
    value: Product,
    action: "add" | "remove" | "clear",
  ): void => {
    // check if item is already on cart
    const itemOnCart: ProductOnCart | undefined = cart.items.find((item) => item.id === value.id);

    if (action === "add") {
      if (itemOnCart) {
        itemOnCart.quantity += 1;
        itemOnCart.total = itemOnCart.quantity * itemOnCart.price;
        setCart(prev => ({
          ...prev,
          total: prev.total + itemOnCart.total,
        }));
      } else {
        setCart(prev => ({
          ...prev,
          total: prev.total + value.price,
          items: [...prev.items, { ...value, quantity: 1, total: value.price }],
        }));
        enqueueSnackbar("Item adicionado ao carrinho", { variant: "success" });
      };
    } else if (action === "remove") {
      if (itemOnCart) {
        if (itemOnCart.quantity > 1) {
          itemOnCart.quantity -= 1;
          itemOnCart.total = itemOnCart.quantity * itemOnCart.price;
          setCart(prev => ({
            items: prev.items.map((item) => item.id === value.id ? itemOnCart : item),
            total: prev.total - itemOnCart.price,
          }));
        } else {
          setCart(prev => ({
            total: prev.total - itemOnCart.price,
            items: prev.items.filter((item) => item.id !== value.id),
          }));
          enqueueSnackbar("Item removido do carrinho", { variant: "success" });
        };
      };
    } else if (action === "clear") {
      if (itemOnCart) {
        setCart(prev => ({
          total: prev.total - itemOnCart.total,
          items: prev.items.filter((item) => item.id !== value.id),
        }));
      } else {
        setCart(prev => ({
          total: prev.total - value.price,
          items: prev.items.filter((item) => item.id !== value.id),
        }));
      }
      enqueueSnackbar("Item removido do carrinho", { variant: "success" });
    };
  };

  return (
    <CartContext.Provider
      value={{
        updateCart: updateCart,
        cart: cart,
        openModal: openCartModal,
        handleCloseModal: handleCloseCartModal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};