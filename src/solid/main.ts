import { order } from './srp/services/order/orderSatus';
import { shoppingCart } from './srp/class/shoping-cart/shopinCart';
import { checkout } from './srp/class/checkout/checkout';
import { message } from './srp/services/message/message';
import { product } from './srp/class/product/product';

const shoppingList = new shoppingCart();
const orderSatus = new order();
const messages = new message();
const checkOut = new checkout(shoppingList, messages, orderSatus);

checkOut.checkOut();
shoppingList.addItens(new product('Lapis', 1.88));
shoppingList.addItens(new product('Roupa', 55.6));
shoppingList.addItens(new product('Sapato', 88.88));
console.log(shoppingList.cartItem);
console.log(shoppingList.valueTotal());
console.log(
  `Seu carrinho esta com preço total de  R$ ${shoppingList.valueTotal()}`,
);
shoppingList.removeItens(2);
console.log(
  `Seu carrinho esta com preço total de  R$ ${shoppingList.valueTotal()}`,
);
checkOut.checkOut();
console.log(
  `Seu carrinho esta com preço total de  R$ ${shoppingList.valueTotal()}`,
);
