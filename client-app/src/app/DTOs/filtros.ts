import { Bairro } from "../models/bairro";
import { Cidade } from "../models/cidade";
import { Tipo } from "../models/tipo";

export default interface Filtros{
    bairros: Bairro[],
    cidades: Cidade[],
    tipos: Tipo[],
    valorMax: number,
    valorMin: number
}