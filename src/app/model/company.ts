export class Company {
    id?: number;
    name: string;
    cnpj: number;

    constructor(name: string, cnpj: number) {
        this.name = name;
        this.cnpj = cnpj;
    }
}
