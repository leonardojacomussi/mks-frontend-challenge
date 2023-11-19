export type Product = {
  id:	number,
  name:	string,
  brand:	string,
  description:	string,
  price:	number,
  createdAt: Date,
  updatedAt: Date,
  photo:	string,
};

export interface ProductOnCart extends Product {
  quantity: number,
  total: number,
};


export type Cart = {
  items: Array<ProductOnCart>,
  total: number,
};

export type CartContextType = {
  cart: Cart,
  openModal: boolean,
  handleCloseModal: () => void,
  updateCart: (
    value: Product,
    action: "add" | "remove"
  ) => void
};