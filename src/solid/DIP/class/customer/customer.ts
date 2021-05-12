import {
  Customer,
  EntepriseCustomer,
  PersonalCustomer,
} from '../interface/custormer-protocol';

export class IndividualCustomer implements PersonalCustomer, Customer {
  firstName: string;
  secondName: string;
  cpf: number;
  rg: number;
  cnpj: string;

  constructor(firstName: string, secondName: string, cpf: number, rg: number) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.cpf = cpf;
    this.rg = rg;
    this.cnpj = ' ';
  }

  getName(): string {
    return this.firstName + '   ' + this.secondName;
  }

  getIND(): number {
    return this.cpf;
  }
}

export class CompanyCustomer implements EntepriseCustomer, Customer {
  companyName: string;
  cnpj: number;

  constructor(companyName: string, cnpj: number) {
    this.companyName = companyName;
    this.cnpj = cnpj;
  }
  getName(): string {
    return this.companyName;
  }
  getIND(): number {
    return this.cnpj;
  }
}
