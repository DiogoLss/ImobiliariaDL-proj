import { Images } from "./images";

export interface Imovel{
    id: string,
    nome: string,
    descricao: string,
    preco: number,
    quartos: number,
    banheiros: number,
    salas: number,
    garagens: number,
    tipo: string,
    numeroDoApCd: number,
    eVenda: boolean,
    bairro: string,
    CEP: string,
    cidade: string,
    rua: string,
    numero: number,
    images: Images[]
}