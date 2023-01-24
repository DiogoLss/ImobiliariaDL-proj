import { Bairro } from "./bairro";

export interface Imovel{
    id: string,
    nome: string,
    descricao: string,
    preco: number,
    quartos: number,
    banheiros: number,
    salas: number,
    garagens: number,
    eCondominio: boolean,
    eApartamento: boolean,
    numeroDoApCd: number,
    //
    bairroId: number,
    bairro: Bairro,
    CEP: string,
    cidade: string,
    rua: string,
    numero: number
}