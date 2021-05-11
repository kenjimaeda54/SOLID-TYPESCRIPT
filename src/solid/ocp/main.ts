import { order } from './services/order/orderSatus';
import { shoppingCart } from './class/shoping-cart/shopinCart';
import { checkout } from './class/checkout/checkout';
import { message } from './services/message/message';
import { product } from './class/product/product';
import { tenPerCent } from './class/descont/descont';
//import { fifthPerCent } from './class/descont/descont';

//const fityPorCent = new fifthPerCent();
const tenPercent = new tenPerCent();
const shoppingList = new shoppingCart(tenPercent);
const orderSatus = new order();
const messages = new message();
const check = new checkout(shoppingList, messages, orderSatus);

check.checkOut();
console.log(check.order);
shoppingList.addItens(new product('Lapis', 1.88));
shoppingList.addItens(new product('Roupa', 55.6));
shoppingList.addItens(new product('Sapato', 88.88));
console.log(shoppingList.cartItem);
console.log(shoppingList.valueTotal());
console.log(
  `Seu carrinho esta com preço total de  R$ ${shoppingList.valueTotal()}`,
);
console.log(`Valor com desconto ${shoppingList.valueDesconte()}`);
shoppingList.removeItens(2);
console.log(
  `Seu carrinho esta com preço total de  R$ ${shoppingList.valueTotal()}`,
);
check.checkOut();
console.log(check.order);
console.log(
  `Seu carrinho esta com preço total de  R$ ${shoppingList.valueTotal()}`,
);
