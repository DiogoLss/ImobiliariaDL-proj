export default interface FiltrosParameters
{
    cidade: number | null,
    bairro: number | null,
    tipo: number | null,
    evenda: boolean | null,
    min: number | null,
    max: number | null 
}
export interface FiltrosParametersNumbers
{
    min: number | null,
    max: number | null 
}