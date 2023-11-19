import {
  FC,
  useEffect,
} from "react";
import {
  Card,
  CardImage,
  CardAction,
  CardDescription,
  CardTitleAndPrice,
} from "./styles";
import Image from "next/image";
import { Product } from "@/interfaces";
import { HTMLMotionProps } from "framer-motion";
import { numberToCurrency } from "@/utils/tools";
import useCartContext from "@/hooks/useCartContext";
import BagIcon from "../../../public/assets/BagIcon";

interface ProductCardProps extends HTMLMotionProps<"li"> {
  product: Product;
};

const ProductCard: FC<ProductCardProps> = ({
  product,
  ...props
}): JSX.Element => {
  const { updateCart } = useCartContext();

  useEffect(() =>  {
    const options = document.getElementsByClassName("price");
    for (let index = 0; index < options.length; ++index) {
      options[index].innerHTML = options[index].innerHTML.replace(/\&nbsp;/g, "");
    };
  }, []);

  return (
    <Card data-testid="product-card" {...props}>
      <CardImage>
        <Image
          width={100}
          height={138}
          alt={product.name}
          src={product.photo}
          title={product.name}
        />
      </CardImage>
      <CardTitleAndPrice>
        <h3>{product.name}</h3>
        <div className="price">{numberToCurrency(product.price)}</div>
      </CardTitleAndPrice>
      <CardDescription>
        <p title={product.description}>{product.description}</p>
      </CardDescription>
      <CardAction onClick={() => updateCart(product, "add")}>
        <BagIcon/>
        COMPRAR
      </CardAction>
    </Card>
  );
};

export default ProductCard;