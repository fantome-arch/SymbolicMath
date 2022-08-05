import React from 'react'
import Normalcalc from '../styles/Normalcalc.module.css';
import { GiSquare } from 'react-icons/gi';
import { addStyles, StaticMathField } from 'react-mathquill'
export default function Calculus(props) {
  addStyles()
  return (
    <div className={Normalcalc.calcflex}>
      <div className={Normalcalc.basicfuncs}>
        <div onClick={()=>{props.input('lim_{x\\rightarrow }\\left(\\right)',3)}}className={Normalcalc.genbtn}><span className={Normalcalc.latexicon}>
          <StaticMathField>{`lim_{x\\rightarrow()}\\left(\\right)`}</StaticMathField></span></div>
        <div onClick={()=>{props.input('\\frac{d}{d\\left(x\\right)}\\left(\\right)',1)}} className={Normalcalc.genbtn}><span className={Normalcalc.latexicon}>
          <StaticMathField>{`\\frac{d}{d\\left(x\\right)}\\left(\\right)`}</StaticMathField></span></div>
        <div onClick={()=>{props.input('\\int _{\\ }^{\\ }\\left(\\right)d\\left(x\\right)',5)}} className={Normalcalc.genbtn}>∫ (<GiSquare />) dx</div>

        <div onClick={()=>{props.input('lim_{\\rightarrow }\\left(\\right)',4)}} className={Normalcalc.genbtn}><span className={Normalcalc.latexicon}>
          <StaticMathField>{`lim_{()\\rightarrow\\left(\\right)}\\left(\\right)`}</StaticMathField></span></div>
        <div onClick={()=>{props.input('\\frac{d}{d\\left(\\right)}\\left(\\right)',4)}} className={Normalcalc.genbtn}><span className={Normalcalc.latexicon}>
          <StaticMathField>{`\\frac{d}{d\\left(\\right)}\\left(\\right)`}</StaticMathField></span></div>
        <div onClick={()=>{props.input('\\int _{\\ }^{\\ }\\left(\\right)d\\left(\\right)',4)}} className={Normalcalc.genbtn}>∫ (<GiSquare />) d<GiSquare /></div>

        <div onClick={()=>{props.input('lim_{x\\rightarrow0}\\left(\\right)',1)}} className={Normalcalc.genbtn}><span className={Normalcalc.latexicon}>
          <StaticMathField>{`lim_{x\\rightarrow0}\\left(\\right)`}</StaticMathField></span></div>
        <div onClick={()=>{props.input('\\frac{d}{d\\left(\\right)^{ }}\\left(\\right)',7)}} className={Normalcalc.genbtn}><span className={Normalcalc.latexicon}>
          <StaticMathField>{`\\frac{d}{d\\left(\\right)^{}}\\left(\\right)`}</StaticMathField></span></div>
        <div onClick={()=>{props.input('\\int _{ }^{ }\\left(\\right)d\\left(x\\right)',8)}} className={Normalcalc.genbtn}><span className={Normalcalc.latexicon}>
          <StaticMathField>{`\\int _{ }^{ }\\left(\\right)dx`}</StaticMathField></span></div>

        <div onClick={()=>{props.input('lim_{x\\rightarrow∞}\\left(\\right)',1)}} className={Normalcalc.genbtn}><span className={Normalcalc.latexicon}>
          <StaticMathField>{`lim_{x\\rightarrow∞}\\left(\\right)`}</StaticMathField></span></div>
        <div onClick={()=>{props.input('\\frac{d}{d\\left(\\right)^{2}}\\left(\\right)',7)}} className={Normalcalc.genbtn}><span className={Normalcalc.latexicon}>
          <StaticMathField>{`\\frac{d}{d\\left(\\right)^{2}}\\left(\\right)`}</StaticMathField></span></div>
        <div onClick={()=>{props.input('\\int _{ }^{ }\\left(\\right)d\\left(\\right)',7)}} className={Normalcalc.genbtn}><span className={Normalcalc.latexicon}>
          <StaticMathField>{`\\int _{ }^{ }\\left(\\right)d()`}</StaticMathField></span></div>
      </div>



    </div>
  )
}
