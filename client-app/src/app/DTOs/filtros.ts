import { Bairro, Cidade } from "../models/localizacoes";
import { Tipo } from "../models/tipo";

export default interface Filtros{
    cidades: Cidade[],
    bairros: Bairro[],
    tipos: Tipo[],
    valorMaxA: number,
    valorMinA: number,
    valorMaxV: number,
    valorMinV: number
}