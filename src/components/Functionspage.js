import React from 'react'
import Normalcalc from '../styles/Normalcalc.module.css';
// import { } from 'react-icons/fa'
import {TbSum} from 'react-icons/tb'
import { GiSquare } from 'react-icons/gi'
import { addStyles, StaticMathField } from 'react-mathquill'
export default function Functionspage(props) {
  addStyles()
  return (
    <div className={Normalcalc.secflexfunc}>
      <div className={Normalcalc.basicfuncs}>
        <div onClick={()=>props.input('\\sum',2)} className={Normalcalc.genbtn}> <TbSum/></div>
        <div onClick={()=>props.input('log\\left(\\right)',1)} className={Normalcalc.genbtn}>log</div>
        <div onClick={()=>props.input('abs\\left(\\right)',1)}className={Normalcalc.genbtn}>|<GiSquare />|</div>

        <div onClick={()=>props.input('\\prod',2)}className={Normalcalc.genbtn}>Π</div>
        <div onClick={()=>props.input('ln\\left(\\right)',1)}className={Normalcalc.genbtn}>ln</div>
        <div onClick={()=>props.input('!')}className={Normalcalc.genbtn}>!</div>

        <div onClick={()=>props.input('rect\\left(\\right)',1)}className={Normalcalc.genbtn}>rect</div>
        <div onClick={()=>props.input('log_{ }\\left(\\right)',3)}className={Normalcalc.genbtn}><span className={Normalcalc.latexicon}>
          <StaticMathField>{`log_{ }\\left(\\right)`}</StaticMathField></span></div>
        <div onClick={()=>props.input('i')}className={Normalcalc.genbtn}>i</div>

        <div onClick={()=>props.input('round\\left(\\right)',1)}className={Normalcalc.genbtn}>round</div>
        <div onClick={()=>props.input('max\\left(\\right)',1)}className={Normalcalc.genbtn}>max</div>
        <div onClick={()=>props.input('min\\left(\\right)',1)}className={Normalcalc.genbtn}>min</div>
      </div>
      <div className={Normalcalc.numpad}>
        <div onClick={()=>props.input('fib\\left(\\right)',1)}className={Normalcalc.genbtn}>fib</div>
        <div onClick={()=>props.input('floor\\left(\\right)',1)}className={Normalcalc.genbtn}>floor</div>
        <div onClick={()=>props.input('ceil\\left(\\right)',1)}className={Normalcalc.genbtn}>ceil</div>

        <div onClick={()=>props.input('lcm\\left(\\right)',1)}className={Normalcalc.genbtn}>lcm</div>
        <div onClick={()=>props.input('gcd\\left(\\right)',1)}className={Normalcalc.genbtn}>gcd</div>
        <div onClick={()=>props.input('e')}className={Normalcalc.genbtn}>e</div>

        <div onClick={()=>props.input('^{ }C_{ }')}className={Normalcalc.genbtn}><span className={Normalcalc.latexicon}>
          <StaticMathField>{`^{ }C_{ }`}</StaticMathField></span></div>
        <div onClick={()=>props.input('^{ }P_{ }')}className={Normalcalc.genbtn}><span className={Normalcalc.latexicon}>
          <StaticMathField>{`^{ }P_{ }`}</StaticMathField></span></div>
        <div onClick={()=>props.input('e^{}',1)}className={Normalcalc.genbtn}>e<sup><GiSquare /></sup></div>

        <div onClick={()=>props.input('°')}className={Normalcalc.genbtn}>°</div>
      </div>



    </div>
  )
}
