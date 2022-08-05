import React from 'react'
import Gencal from './Gencalculator'
import Functionspage from './Functionspage'
import Alphabets from './Alphabets'
import Trigfuncs from './Trigfuncs'
import Calculus from './Calculus'
export default function Tabnav(props) {
  switch(props.name){
    default:
        return <Gencal input={props.input}/>
    case 'general':
        return <Gencal input={props.input}/>
    case 'funcs':
        return <Functionspage input={props.input}/>
    case 'trig':
        return <Trigfuncs input={props.input}/>
    case 'calc':
        return <Calculus input={props.input}/>
    case 'abc':
        return <Alphabets input={props.input}/>
  }
}
