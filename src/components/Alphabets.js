import React from 'react'
// ∫
import Normalcalc from '../styles/Normalcalc.module.css';
export default function Alphabets(props) {
  return (
    <div className={Normalcalc.secflexabc}>
      <div className={Normalcalc.basicfuncs}>
        <div onClick={()=>{props.input('a')}}className={Normalcalc.genbtn}>a</div>
        <div onClick={()=>{props.input('b')}}className={Normalcalc.genbtn}>b</div>
        <div onClick={()=>{props.input('c')}}className={Normalcalc.genbtn}>c</div>

        <div onClick={()=>{props.input('d')}}className={Normalcalc.genbtn}>d</div>
        <div onClick={()=>{props.input('e')}}className={Normalcalc.genbtn}>e</div>
        <div onClick={()=>{props.input('f')}}className={Normalcalc.genbtn}>f</div>

        <div onClick={()=>{props.input('g')}}className={Normalcalc.genbtn}>g</div>
        <div onClick={()=>{props.input('h')}}className={Normalcalc.genbtn}>h</div>
        <div onClick={()=>{props.input('i')}}className={Normalcalc.genbtn}>j</div>

        <div onClick={()=>{props.input('j')}}className={Normalcalc.genbtn}>k</div>
        <div onClick={()=>{props.input('k')}}className={Normalcalc.genbtn}>l</div>
        <div onClick={()=>{props.input('l')}}className={Normalcalc.genbtn}>m</div>
      </div>
      <div className={Normalcalc.numpad}>
        <div onClick={()=>{props.input('m')}}className={Normalcalc.genbtn}>n</div>
        <div onClick={()=>{props.input('n')}}className={Normalcalc.genbtn}>o</div>
        <div onClick={()=>{props.input('o')}}className={Normalcalc.genbtn}>p</div>

        <div onClick={()=>{props.input('p')}}className={Normalcalc.genbtn}>q</div>
        <div onClick={()=>{props.input('q')}}className={Normalcalc.genbtn}>r</div>
        <div onClick={()=>{props.input('r')}}className={Normalcalc.genbtn}>s</div>

        <div onClick={()=>{props.input('s')}}className={Normalcalc.genbtn}>t</div>
        <div onClick={()=>{props.input('t')}}className={Normalcalc.genbtn}>u</div>
        <div onClick={()=>{props.input('u')}}className={Normalcalc.genbtn}>v</div>

        <div onClick={()=>{props.input('w')}}className={Normalcalc.genbtn}>w</div>
      </div>



    </div>
  )
}
