import axios from "axios";
import { Product } from "@/interfaces";

const api = axios.create({
  baseURL: "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1",
});

export const getProducts = async (): Promise<Array<Product> | null> => {
  const products: Array<Product> = [];
  try {
    const { data }: { data: { products: Array<Product> } } = await api.get(
      "/products",
      {
        params: {
          page: 1,
          rows: 8,
          sortBy: "id",
          orderBy: "ASC",
        }
      }
    );
    if (data.hasOwnProperty("products") && Array.isArray(data.products)) {
      data.products.map((product: Product) => {
        products.push({
          ...product,
          createdAt: new Date(product.createdAt),
          updatedAt: new Date(product.updatedAt),
          price: typeof product.price === "string" ? parseFloat(product.price) : product.price
        });
      });
    } else {
      return null;
    }
    return products;
  } catch (error) {
    console.log(error);
    return null;
  };

};

export default api;