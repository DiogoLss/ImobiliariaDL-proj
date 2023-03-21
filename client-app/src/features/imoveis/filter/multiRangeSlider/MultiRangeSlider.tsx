import { observer } from 'mobx-react';
import React, { ChangeEvent, FC, useCallback, useEffect, useState, useRef } from 'react';
import { FiltrosParametersNumbers } from '../../../../app/DTOs/filtrosParameters';
import { useStore } from '../../../../app/stores/stores';
import './multiRangeSlider.css';

interface Props {
  min: number;
  max: number;
}

export default observer( function MultiRangeSlider({ min, max }: Props){

  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef<HTMLDivElement>(null); 

  const {imoveisStore} = useStore();
  const {setRangeNum} = imoveisStore;

  // Convert to percentage
  const getPercent = useCallback((value: number) =>
    Math.round(((value - min) / (max - min)) * 100), [min, max])

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  function SetToContext(event: ChangeEvent<HTMLInputElement>){
    const {name, value} = event.target;
    setRangeNum(name,value)
  }

  return (
    <div className="containerBar">
        <input
          type="range"
          min={min}
          max={max}
          name="min"
          value={minVal}
          onChange={(event: ChangeEvent<HTMLInputElement>) => { 
            const value = Math.min(Number(event.target.value), maxVal - 1);
            setMinVal(value);
            minValRef.current = value;
            SetToContext(event)
          }}
          className="thumb thumb--left"
          // style={{ zIndex: minVal > max - 100 && "5" }}
        />
        <input
          type="range"
          min={min}
          max={max}
          name="max"
          value={maxVal}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {  
            const value = Math.max(Number(event.target.value), minVal + 1);
            setMaxVal(value);
            maxValRef.current = value;
            SetToContext(event)
          }}
          className="thumb thumb--right"
        />

        <div className="slider">
          <div className="slider__track"></div>
          <div ref={range} className="slider__range"></div>
          <div className="slider__left-value">{minVal}</div>
          <div className="slider__right-value">{maxVal}</div>
        </div>
      </div>
  );
})