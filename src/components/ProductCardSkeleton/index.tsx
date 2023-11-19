import {
  FC,
  HTMLAttributes,
} from "react";
import {
  Card,
  CardImage,
  CardAction,
  CardDescription,
  CardTitleAndPrice,
} from "./styles";
import { Skeleton } from "@mui/material";
import BagIcon from "../../../public/assets/BagIcon";

const ProductCardSkeleton: FC<HTMLAttributes<HTMLDivElement>> = (props): JSX.Element => {
  return (
    <Card {...props}>
      <CardImage>
        <Skeleton variant="rectangular" width={200} height={138} />
      </CardImage>
      <CardTitleAndPrice>
        <Skeleton variant="text" width={100} sx={{ fontSize: "1.6rem" }} />
        <Skeleton variant="text" width={50} sx={{ fontSize: "1.6rem" }} />
      </CardTitleAndPrice>
      <CardDescription>
        <Skeleton variant="text" width={100} sx={{ fontSize: "1.6rem" }} />
        <Skeleton variant="text" width={75} sx={{ fontSize: "1.6rem" }} />
      </CardDescription>
      <CardAction>
        <Skeleton variant="text" width={120} sx={{ fontSize: "2rem" }} />
      </CardAction>
    </Card>
  );
};

export default ProductCardSkeleton;