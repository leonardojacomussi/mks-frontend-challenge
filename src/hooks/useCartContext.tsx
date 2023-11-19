import { useContext } from "react";
import { CartContextType } from "@/interfaces";
import { CartContext } from "@/contexts/CartContext";

const useCartContext: () => CartContextType = () => useContext(CartContext);

export default useCartContext;