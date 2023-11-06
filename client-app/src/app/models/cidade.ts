import { Bairro } from "./bairro";

export interface Cidade{
    id: number,
    cidadeNome: string,
    bairros: Bairro[]
}
