import { Cart } from '../interface/interface';

export class shoppingCart {
  private readonly _cartItens: Cart[] = [];
  addItens(item: Cart): void {
    this._cartItens.push(item);
  }

  get cartItem(): Readonly<Cart[]> {
    return this._cartItens;
  }

  //método splice necessita de dois parâmetros  para funcionar corretamente,primeiro o índice
  // é  segundo é   total que deseja excluir
  removeItens(index: number): void {
    const remove = this._cartItens.splice(index, 1);
    const itensRemove = remove.map((item) => item.name);
    return console.log(` Item ${itensRemove} removido com sucesso `);
  }

  //toFixed retorna uma string,para return number,solução simples foi colocar o sinal de +
  valueTotal(): number {
    return +this._cartItens
      .reduce((acc, item) => (acc += item.price), 0)
      .toFixed(2);
  }

  isInputy(): boolean {
    return this._cartItens.length === 0;
  }
  clear(): number {
    console.log('Carrinho limpo');
    return (this._cartItens.length = 0);
  }
}
