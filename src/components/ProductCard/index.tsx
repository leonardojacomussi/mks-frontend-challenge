import {
  FC,
  useEffect,
  HTMLAttributes,
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
import { numberToCurrency } from "@/utils/tools";
import BagIcon from "../../../public/assets/BagIcon";
import useCartContext from "@/hooks/useCartContext";

interface ProductCardProps extends HTMLAttributes<HTMLDivElement> {
  product: Product;
};

const ProductCard: FC<ProductCardProps> = ({
  product,
  ...props
}): JSX.Element => {
  const { updateCart } = useCartContext();

  useEffect(() =>  {
    var options = document.getElementsByClassName("price")
    for (let index = 0; index < options.length; ++index) {
      options[index].innerHTML = options[index].innerHTML.replace(/\&nbsp;/g, "");
    }
  }, []);

  return (
    <Card {...props}>
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