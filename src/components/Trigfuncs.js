import React from 'react'
import Normalcalc from '../styles/Normalcalc.module.css';
export default function Trigfuncs(props) {
  return (
    <div className={Normalcalc.secflexabc}>
      <div className={Normalcalc.basicfuncs}>
        <div onClick={()=>{props.input('sin\\left(\\right)',1)}} className={Normalcalc.genbtn}>sin</div>
        <div onClick={()=>{props.input('cos\\left(\\right)',1)}}className={Normalcalc.genbtn}>cos</div>
        <div onClick={()=>{props.input('tan\\left(\\right)',1)}}className={Normalcalc.genbtn}>tan</div>

        <div onClick={()=>{props.input('csc\\left(\\right)',1)}}className={Normalcalc.genbtn}>cosec</div>
        <div onClick={()=>{props.input('sec\\left(\\right)',1)}}className={Normalcalc.genbtn}>sec</div>
        <div onClick={()=>{props.input('cot\\left(\\right)',1)}}className={Normalcalc.genbtn}>cot</div>

        <div onClick={()=>{props.input('asin\\left(\\right)',1)}}className={Normalcalc.genbtn}>arcsin</div>
        <div onClick={()=>{props.input('acos\\left(\\right)',1)}}className={Normalcalc.genbtn}>arccos</div>
        <div onClick={()=>{props.input('atan\\left(\\right)',1)}}className={Normalcalc.genbtn}>arctan</div>

        <div onClick={()=>{props.input('acsc\\left(\\right)',1)}}className={Normalcalc.genbtn}>acosec</div>
        <div onClick={()=>{props.input('asec\\left(\\right)',1)}}className={Normalcalc.genbtn}>asec</div>
        <div onClick={()=>{props.input('acot\\left(\\right)',1)}}className={Normalcalc.genbtn}>acot</div>
      </div>
      <div className={Normalcalc.numpad}>
        <div onClick={()=>{props.input('sinh\\left(\\right)',1)}} className={Normalcalc.genbtn}>sinh</div>
        <div onClick={()=>{props.input('cosh\\left(\\right)',1)}} className={Normalcalc.genbtn}>cosh</div>
        <div onClick={()=>{props.input('tanh\\left(\\right)',1)}} className={Normalcalc.genbtn}>tanh</div>

        <div onClick={()=>{props.input('csch\\left(\\right)',1)}} className={Normalcalc.genbtn}>cosech</div>
        <div onClick={()=>{props.input('sech\\left(\\right)',1)}} className={Normalcalc.genbtn}>sech</div>
        <div onClick={()=>{props.input('coth\\left(\\right)',1)}} className={Normalcalc.genbtn}>coth</div>

        <div onClick={()=>{props.input('asinh\\left(\\right)',1)}} className={Normalcalc.genbtn}>arsinh</div>
        <div onClick={()=>{props.input('acosh\\left(\\right)',1)}} className={Normalcalc.genbtn}>arcosh</div>
        <div onClick={()=>{props.input('atanh\\left(\\right)',1)}} className={Normalcalc.genbtn}>artanh</div>

        <div onClick={()=>{props.input('acsch\\left(\\right)',1)}} className={Normalcalc.genbtn}>acosech</div>
        <div onClick={()=>{props.input('asech\\left(\\right)',1)}} className={Normalcalc.genbtn}>asech</div>
        <div onClick={()=>{props.input('acoth\\left(\\right)',1)}} className={Normalcalc.genbtn}>acoth</div>
      </div>



    </div>
  )
}
