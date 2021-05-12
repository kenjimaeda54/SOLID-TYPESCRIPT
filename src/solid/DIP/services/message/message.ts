import { MensageProtocol } from '../../class/interface/mensage-protocol';

export class message implements MensageProtocol {
  sendMensage(msg: string): void {
    return console.log('Salvo com sucesso\n', msg);
  }
}
