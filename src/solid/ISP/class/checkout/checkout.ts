import { shoppingCart } from '../shoping-cart/shopinCart';
import { OrderStatus } from '../interface/type-oder';
import { message } from '../../services/message/message';
import { order } from '../../services/order/orderSatus';
import { Customer } from '../interface/custormer-protocol';

export class checkout {
  private _orderSatus: OrderStatus = 'open';
  constructor(
    private readonly cart: shoppingCart,
    private readonly message: message,
    private readonly oder: order,
    private readonly customer: Customer,
  ) {}

  get Order(): OrderStatus {
    return this._orderSatus;
  }

  checkOut(): void {
    if (this.cart.isInputy()) {
      console.log('Seu carrinho esta vazio adiciona algo por favor');
      return;
    }

    this._orderSatus = 'closed';
    this.message.sendMensage('Pedido realizado com sucesso');
    this.oder.saveOrder();
    this.cart.clear();
    console.log(
      ` Cliente: ${this.customer.getName()}  --  ${this.customer.getIND()}   `,
    );
  }
}
