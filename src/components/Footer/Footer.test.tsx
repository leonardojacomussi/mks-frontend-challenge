import { screen, render, fireEvent } from "@/utils/tests";
import "jest-styled-components";
import Footer from ".";

describe("Footer", () => {
  test("Renders correctly", () => {
    render(<Footer />);
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveTextContent("MKS sistemas © Todos os direitos reservados");
  });
});