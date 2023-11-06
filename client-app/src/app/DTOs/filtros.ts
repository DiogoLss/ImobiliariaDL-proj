import {Cidade } from "../models/cidade";
import { Tipo } from "../models/tipo";

export default interface Filtros{
    cidades: Cidade[],
    tipos: Tipo[],
    valorMaxA: number,
    valorMinA: number,
    valorMaxV: number,
    valorMinV: number
}