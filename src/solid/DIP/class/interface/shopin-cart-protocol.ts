import { Cart } from '../interface/interface';

export interface ShoppingCartProtocol {
  //estou referenciando ao get
  cartItens: Readonly<Cart[]>;
  addItens(item: Cart): void;
  removeItens(index: number): void;
  valueTotal(): number;
  valueDesconte(): number;
  isInputy(): boolean;
  clear(): number;
}
