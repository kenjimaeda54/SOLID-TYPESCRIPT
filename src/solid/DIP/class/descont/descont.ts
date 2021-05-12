export abstract class Desconte {
  protected desconte = 0;

  calcule(price: number): number {
    return price - price * this.desconte;
  }
}

export class fifthPerCent extends Desconte {
  protected readonly desconte = 0.5;
}

export class tenPerCent extends Desconte {
  protected readonly desconte = 0.1;
}
