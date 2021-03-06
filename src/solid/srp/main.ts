import { order } from './services/order/orderSatus';
import { shoppingCart } from './class/shoping-cart/shopinCart';
import { checkout } from './class/checkout/checkout';
import { message } from './services/message/message';
import { product } from './class/product/product';

const shoppingList = new shoppingCart();
const orderSatus = new order();
const messages = new message();
const checkOut = new checkout(shoppingList, messages, orderSatus);

checkOut.checkOut();
console.log(checkOut.Order);
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
console.log(checkOut.Order);
console.log(
  `Seu carrinho esta com preço total de  R$ ${shoppingList.valueTotal()}`,
);
