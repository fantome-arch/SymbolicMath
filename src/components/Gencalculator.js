import React from 'react'
import Normalcalc from '../styles/Normalcalc.module.css';
import { addStyles, StaticMathField } from 'react-mathquill'
import { FaGreaterThan, FaLessThan, FaLessThanEqual, FaGreaterThanEqual } from 'react-icons/fa'
import { TbParentheses, TbSquareRoot2 } from 'react-icons/tb'
import { GiSquare } from 'react-icons/gi'
 addStyles()
export default function Gencal(props) {
 
  return (
    <div className={Normalcalc.secflex}>
      <div className={Normalcalc.basicfuncs}>
        <div onClick={()=>{props.input('>')}} className={Normalcalc.genbtn}> <FaGreaterThan /></div>
        <div onClick={()=>{props.input('\\left(\\right)',1)}} className={Normalcalc.genbtn}><TbParentheses /></div>
        <div onClick={()=>{props.input('^2')}} className={Normalcalc.genbtn}><GiSquare /><sup>2</sup></div>

        <div onClick={()=>{props.input('<')}}className={Normalcalc.genbtn}><FaLessThan /></div>
        <div onClick={()=>{props.input('\\sqrt{ }',1)}}className={Normalcalc.genbtn}><TbSquareRoot2 /></div>
        <div onClick={()=>{props.input('^3')}}className={Normalcalc.genbtn}><GiSquare /><sup>3</sup></div>

        <div onClick={()=>{props.input('\\ge')}}className={Normalcalc.genbtn}><FaGreaterThanEqual /></div>
        <div onClick={()=>{props.input('\\sqrt[3]{}',1)}}className={Normalcalc.genbtn}><sup>3</sup><TbSquareRoot2 /></div>
        <div onClick={()=>{props.input('^{}')}}className={Normalcalc.genbtn}><GiSquare /><sup><GiSquare /></sup></div>

        <div onClick={()=>{props.input('\\le')}}className={Normalcalc.genbtn}><FaLessThanEqual /></div>
        <div onClick={()=>{props.input('\\sqrt[]{}',2)}}className={Normalcalc.genbtn}><sup><GiSquare /></sup><TbSquareRoot2 /></div>
        <div onClick={()=>{props.input('%')}}className={Normalcalc.genbtn}>%</div>
      </div>
      <div className={Normalcalc.numpad}>
        <div onClick={()=>{props.input('1')}}className={Normalcalc.genbtn}>1</div>
        <div onClick={()=>{props.input('2')}}className={Normalcalc.genbtn}>2</div>
        <div onClick={()=>{props.input('3')}}className={Normalcalc.genbtn}>3</div>

        <div onClick={()=>{props.input('4')}}className={Normalcalc.genbtn}>4</div>
        <div onClick={()=>{props.input('5')}}className={Normalcalc.genbtn}>5</div>
        <div onClick={()=>{props.input('6')}}className={Normalcalc.genbtn}>6</div>

        <div onClick={()=>{props.input('7')}}className={Normalcalc.genbtn}>7</div>
        <div onClick={()=>{props.input('8')}}className={Normalcalc.genbtn}>8</div>
        <div onClick={()=>{props.input('9')}}className={Normalcalc.genbtn}>9</div>

        <div onClick={()=>{props.input('.')}}className={Normalcalc.genbtn}>.</div>
        <div onClick={()=>{props.input('0')}}className={Normalcalc.genbtn}>0</div>
        <div onClick={()=>{props.input('=')}}className={Normalcalc.genbtn}>=</div>
      </div>
      <div className={Normalcalc.operations}>
        <div onClick={()=>{props.input('+')}}className={Normalcalc.genbtn}>+</div>
        <div onClick={()=>{props.input('\\frac{}{}',2)}}className={Normalcalc.genbtn}><span className={Normalcalc.latexicon}><StaticMathField>{`\\frac{}{}`}</StaticMathField></span></div>
        <div onClick={()=>{props.input('z')}}className={Normalcalc.genbtn}>z</div>

        <div onClick={()=>{props.input('-')}}className={Normalcalc.genbtn}>-</div>
        <div onClick={()=>{props.input(',')}}className={Normalcalc.genbtn}>,</div>
        <div onClick={()=>{props.input('\\pi')}}className={Normalcalc.genbtn}>π</div>

        <div onClick={()=>{props.input('*')}}className={Normalcalc.genbtn}>*</div>
        <div onClick={()=>{props.input('x')}}className={Normalcalc.genbtn}>x</div>
        <div onClick={()=>{props.input('\\beta')}}className={Normalcalc.genbtn}>β</div>

        <div onClick={()=>{props.input('/')}}className={Normalcalc.genbtn}>/</div>
        <div onClick={()=>{props.input('y')}}className={Normalcalc.genbtn}>y</div>
        <div onClick={()=>{props.input('\\alpha')}}className={Normalcalc.genbtn}>α</div>


      </div>



    </div>
  )
}
