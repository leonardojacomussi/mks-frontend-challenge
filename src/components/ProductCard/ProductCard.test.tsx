import ProductCard from ".";
import "jest-styled-components";
import products from "@/mock/products";
import { CartContext } from "@/contexts/CartContext";
import { screen, render, fireEvent } from "@/utils/tests";

describe("ProductCard", () => {
  const cart = {
    items: products.map((product, index) => ({ ...product, quantity: index + 1 })),
    total: 0,
  };
  const updateCart = jest.fn(() => {
    cart.items = cart.items.map((item) => {
      if (item.id === products[0].id) {
        return {
          ...item,
          quantity: item.quantity + 1,
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
        <ProductCard product={products[0]} />
      </CartContext.Provider>
    );

    const productCard = screen.getByTestId("product-card");
    expect(productCard).toBeInTheDocument();

    const title = screen.getByRole("heading");
    expect(title).toHaveTextContent(products[0].name);

    const description = screen.getByText(products[0].description);
    expect(description).toBeInTheDocument();

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Button action", () => {
    render(
      <CartContext.Provider value={{
        updateCart: updateCart,
        cart: cart,
        openModal: openCartModal,
        handleCloseModal: handleCloseCartModal
      }}>
        <ProductCard product={products[1]} />
      </CartContext.Provider>
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(updateCart).toHaveBeenCalledTimes(1);
    expect(cart.items[0].quantity).toBe(2);
  });
});