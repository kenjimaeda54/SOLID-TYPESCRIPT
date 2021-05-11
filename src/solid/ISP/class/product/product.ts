import { Cart } from '../interface/interface';

export class product implements Cart {
  constructor(public name: string, public price: number) {}
}
