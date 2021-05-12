export type Customer = {
  getName(): string;
  getIND(): number;
};

export interface PersonalCustomer {
  firstName: string;
  secondName: string;
  cpf: number;
  rg: number;
}

export interface EntepriseCustomer {
  companyName: string;
  cnpj: number;
}
