import { Product } from "./product.model";

export interface Order {
  id: string,
  user: string,
  date: string,
  total: number,
  products: Product[],
  isExpanded: boolean
}
