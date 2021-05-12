import { OrderStatus } from '../interface/type-oder';
import { Customer } from '../interface/custormer-protocol';
import { ShoppingCartProtocol } from '../interface/shopin-cart-protocol';
import { MensageProtocol } from '../interface/mensage-protocol';
import { OrderProtocol } from '../interface/order.protocol';

export class checkout {
  private _orderSatus: OrderStatus = 'open';
  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly message: MensageProtocol,
    private readonly oder: OrderProtocol,
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
