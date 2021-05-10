import { order } from './services/order/orderSatus';
import { shoppingCart } from './class/shoping-cart/shopinCart';
import { checkout } from './class/checkout/checkout';
import { message } from './services/message/message';
import { product } from './class/product/product';
import { tenPorCent } from './class/descont/descont';
//import { fifthPorCent } from './class/descont/descont';

//const fityPorCent = new fifthPorCent();
const tenPercent = new tenPorCent();
const shoppingList = new shoppingCart(tenPercent);
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
console.log(`Valor com desconto ${shoppingList.valueWithDesconte()}`);
shoppingList.removeItens(2);
console.log(
  `Seu carrinho esta com preço total de  R$ ${shoppingList.valueTotal()}`,
);
checkOut.checkOut();
console.log(
  `Seu carrinho esta com preço total de  R$ ${shoppingList.valueTotal()}`,
);
