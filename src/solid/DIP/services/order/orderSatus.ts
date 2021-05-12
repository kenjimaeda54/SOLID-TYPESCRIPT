import { OrderProtocol } from '../../class/interface/order.protocol';

export class order implements OrderProtocol {
  saveOrder(): void {
    console.log('Pedido envido com sucesso');
  }
}
