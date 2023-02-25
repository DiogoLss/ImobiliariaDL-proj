import { Bairro } from "../models/bairro";
import { Cidade } from "../models/cidade";
import { Imovel } from "../models/imovel";
import { Tipo } from "../models/tipo";

export default interface ImovelComFiltros{
    imoveis: Imovel[],
    bairros: Bairro[],
    cidades: Cidade[],
    tipos: Tipo[]
}