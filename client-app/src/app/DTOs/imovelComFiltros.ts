import { Bairro } from "../models/bairro";
import { Imovel } from "../models/imovel";

export default interface ImovelComFiltros{
    imoveis: Imovel[],
    bairros: Bairro[]
}