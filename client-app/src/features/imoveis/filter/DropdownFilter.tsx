import { observer } from "mobx-react";
import { useState } from "react";
import { FiltrosParametersDropdown } from "../../../app/DTOs/filtrosParameters";
import { useStore } from "../../../app/stores/stores";

export default observer(function DropdownFilter(){
    const {imoveisStore} = useStore();
    const {filtros} = imoveisStore;
    const [filter, setFilter] = useState<FiltrosParametersDropdown>({
        min: filtros.valorMin,
        max: filtros.valorMax
    })
    const [min, setMin] = useState<number>(filtros.valorMin)
    const [max, setMax] = useState<number>(filtros.valorMax)
    function onInput
      (event: React.ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target;
        setFilter({...filter, [name]: value})
        if(name == "min"){
            setMin(filter.min / 100)
        }else{
            setMax(filter.max / 100)
        }
    }
    return(
    <div className="hiddenBox row">
        <div className="range">
            <div className="range-slider">
                <span className="range-selected"
                style={
                    {
                        right:`${max}%`,
                        left:`${min}%`
                    }
                }></span>
            </div>
            <div className="range-input">
                <input type="range" className="min" name="min" onChange={onInput}  
                min={filtros.valorMin} max={filtros.valorMax} step="50" value={filter.min}/>
                <input type="range" className="max" name="max" onChange={onInput}
                 min={filtros.valorMin} max={filtros.valorMax} step="50" value={filter.max}/>
            </div>
            <div className="range-price">      
                <label htmlFor="min">Mínimo</label>
                <input type="number" name="min" value={filter.min} onChange={onInput} />      
                <label htmlFor="max">Máximo</label>
                <input type="number" name="max" value={filter.max} onChange={onInput} />      
            </div>
        </div> 
    </div>
    )
})