import CartDrawer from ".";
import "jest-styled-components";
import products from "@/mock/products";
import { CartContext } from "@/contexts/CartContext";
import { screen, render, fireEvent } from "@/utils/tests";

describe("CartDrawer", () => {
  const updateCart = jest.fn();
  const cart = {
    items: products.map((product, index) => ({ ...product, quantity: index + 1 })),
    total: 0,
  };
  let openCartModal = false;
  const handleCloseCartModal = jest.fn(() => {
    openCartModal = !openCartModal;
  });

  test("Not renders correctly", () => {
    render(
      <CartContext.Provider value={{
        updateCart: updateCart,
        cart: cart,
        openModal: openCartModal,
        handleCloseModal: handleCloseCartModal
      }}>
        <CartDrawer />
      </CartContext.Provider>
    );

    // check if testid "drawer" exists
    const drawer = screen.queryByTestId("drawer");
    expect(drawer).not.toBeInTheDocument();
  });

  test("Renders correctly", () => {
    openCartModal = true;
    render(
      <CartContext.Provider value={{
        updateCart: updateCart,
        cart: cart,
        openModal: openCartModal,
        handleCloseModal: handleCloseCartModal
      }}>
        <CartDrawer />
      </CartContext.Provider>
    );

    const drawer = screen.getByTestId("drawer");
    expect(drawer).toBeInTheDocument();

    const li = screen.getAllByRole("listitem");
    expect(li).toHaveLength(products.length);
  });
});