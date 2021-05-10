export abstract class Desconte {
  protected desconte = 0;

  calcule(value: number): number {
    return value - value * this.desconte;
  }
}

export class fifthPorCent extends Desconte {
  protected desconte = 0.5;
}

export class tenPorCent extends Desconte {
  protected desconte = 0.1;
}

export class noDesconte extends Desconte {}
