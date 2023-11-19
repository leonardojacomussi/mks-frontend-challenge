import {
  FC,
  useEffect,
} from "react";
import {
  Container,
  CardTitle,
  CardImage,
  CardPrice,
  RemoveButton,
  AddOrRemoveButton,
} from "./styles";
import Image from "next/image";
import { ProductOnCart } from "@/interfaces";
import AddIcon from "@mui/icons-material/Add";
import { HTMLMotionProps } from "framer-motion";
import { numberToCurrency } from "@/utils/tools";
import useCartContext from "@/hooks/useCartContext";
import RemoveIcon from "@mui/icons-material/Remove";
import Close from "../../../public/assets/Close.svg";

interface ProductListItemProps extends HTMLMotionProps<"li"> {
  product: ProductOnCart;
};

const ProductListItem: FC<ProductListItemProps> = ({ product }): JSX.Element => {
  const { updateCart } = useCartContext();

  useEffect(() =>  {
    const options = document.getElementsByClassName("price");
    for (let index = 0; index < options.length; ++index) {
      options[index].innerHTML = options[index].innerHTML.replace(/\&nbsp;/g, "");
    };
  }, []);

  return (
    <Container>
      <CardImage>
        <Image src={product.photo} width={80} height={80} alt={product.name} />
      </CardImage>
      <CardTitle>{product.name}</CardTitle>
      <AddOrRemoveButton>
        <button onClick={() => updateCart(product, "remove")} title="Adicionar um item ao carrinho">
          <RemoveIcon/>
        </button>
        <span>{product.quantity}</span>
        <button onClick={() => updateCart(product, "add")} title="Remover um item ao carrinho">
          <AddIcon />
        </button>
      </AddOrRemoveButton>
      <CardPrice className="price">{numberToCurrency(product.price)}</CardPrice>
      <RemoveButton onClick={() => updateCart(product, "clear")} title="Remover produto do carrinho">
        <Image src={Close} width={18} height={18} alt="Remover produto do carrinho" />
      </RemoveButton>
    </Container>
  );
};

export default ProductListItem;