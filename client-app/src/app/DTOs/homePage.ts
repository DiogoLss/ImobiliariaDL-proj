import { Imovel } from "../models/imovel";
import Filtros from "./filtros";

export interface HomePage
{
    filtros: Filtros,
    imoveis: Imovel[]
}