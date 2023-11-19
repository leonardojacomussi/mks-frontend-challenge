import ProductListItem from ".";
import "jest-styled-components";
import { Product } from "@/interfaces";
import products from "@/mock/products";
import { CartContext } from "@/contexts/CartContext";
import { screen, render, fireEvent } from "@/utils/tests";

describe("ProductListItem", () => {
  const cart = {
    items: products.map((product, index) => ({ ...product, quantity: index + 1 })),
    total: 0,
  };
  const updateCart = jest.fn((value: Product = products[0], action: "add" | "remove" | "clear" = "add") => {
    cart.items = cart.items.map((item) => {
      if (item.id === cart.items[0].id) {
        return {
          ...item,
          quantity: action === "add" ? item.quantity + 1 : item.quantity - 1,
        };
      }
      return item;
    });
    cart.total = cart.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  });
  let openCartModal = false;
  const handleCloseCartModal = jest.fn(() => {
    openCartModal = !openCartModal;
  });

  test("Renders correctly", () => {
    render(
      <CartContext.Provider value={{
        updateCart: updateCart,
        cart: cart,
        openModal: openCartModal,
        handleCloseModal: handleCloseCartModal
      }}>
        <ProductListItem product={cart.items[0]} />
      </CartContext.Provider>
    );

    const productCard = screen.getByTestId("product-list-item");
    expect(productCard).toBeInTheDocument();

    const title = screen.getByRole("heading");
    expect(title).toHaveTextContent(cart.items[0].name);

    const buttonAdd = screen.getByTestId("product-list-item-btn-add");
    expect(buttonAdd).toBeInTheDocument();

    const buttonRemove = screen.getByTestId("product-list-item-btn-remove");
    expect(buttonRemove).toBeInTheDocument();
  });

  test("Button action", () => {
    render(
      <CartContext.Provider value={{
        updateCart: updateCart,
        cart: cart,
        openModal: openCartModal,
        handleCloseModal: handleCloseCartModal
      }}>
        <ProductListItem product={cart.items[1]} />
      </CartContext.Provider>
    );

    const buttonAdd = screen.getByTestId("product-list-item-btn-add");
    fireEvent.click(buttonAdd);
    expect(updateCart).toHaveBeenCalledTimes(1);

    const buttonRemove = screen.getByTestId("product-list-item-btn-remove");
    fireEvent.click(buttonRemove);
    expect(updateCart).toHaveBeenCalledTimes(2);
  });
});