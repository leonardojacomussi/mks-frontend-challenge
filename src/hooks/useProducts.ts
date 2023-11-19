import { AxiosError } from "axios";
import { Product } from "@/interfaces";
import { getProducts } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

const useProducts = () => {
  const { data, status, isFetching, isFetched } = useQuery<
    Product[] | null, AxiosError, Product[] | null, string[]
  >({
    queryKey: ["clients"],
    queryFn: () => getProducts(),
    retry: true,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return { products: data, status, isFetched, isFetching };
};

export default useProducts;