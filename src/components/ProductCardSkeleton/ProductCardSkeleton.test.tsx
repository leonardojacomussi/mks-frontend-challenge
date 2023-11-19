import "jest-styled-components";
import ProductCardSkeleton from ".";
import { screen, render } from "@/utils/tests";

describe("ProductCardSkeleton", () => {
  test("Renders correctly", () => {
    render(<ProductCardSkeleton />);
    const header = screen.getByTestId("product-card-skeleton");
    expect(header).toBeInTheDocument();
  });
});