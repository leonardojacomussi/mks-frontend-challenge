import Header from ".";
import "jest-styled-components";
import { screen, render, fireEvent } from "@/utils/tests";
import { CartContext } from "@/contexts/CartContext";

describe("Header", () => {
  test("Renders correctly", () => {
    render(<Header />);
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("MKS");

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("0");

    const cartIcon = screen.getByTestId("cart-icon");
    expect(cartIcon).toBeInTheDocument();
  });

  test("Cart button action", () => {
    const updateCart = jest.fn();
    const cart = {
      items: [],
      total: 0,
    };
    let openCartModal = false;
    const handleCloseCartModal = jest.fn(() => {
      openCartModal = !openCartModal;
    });

    render(
      <CartContext.Provider value={{
        updateCart: updateCart,
        cart: cart,
        openModal: openCartModal,
        handleCloseModal: handleCloseCartModal
      }}>
        <Header />
      </CartContext.Provider>
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(handleCloseCartModal).toHaveBeenCalledTimes(1);
    expect(openCartModal).toBe(true);
  });
});