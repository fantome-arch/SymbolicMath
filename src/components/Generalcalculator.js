
// eqn.current.mathField.__controller.blurred=true
import shortid from "shortid";
import React, { useState, useRef, useEffect } from "react";
import { addStyles, StaticMathField } from 'react-mathquill'
import EquationEditor from "equation-editor-react";
import Generalcalc from '../styles/Generalcalc.module.css'
import Calcnav from './Sectionsnav'
import * as regex from '../System/Validation'
import formatlogequation from "../System/Expressionmodifier";
import { formatlimits, fixformatting } from "../System/Expressionmodifier";
import { inequality, findineq } from "../System/Validation";
import { solveProblem } from "../System/Solver";
const nerdamer = require('nerdamer');
require('nerdamer/Algebra');
require('nerdamer/Calculus');
require('nerdamer/Solve');
require('nerdamer/Extra');

//end of importing 
// nerdamer.setConstant('e','2.718281828459045')
// nerdamer.set('PARSE2NUMBER', true);



const getshortid = () => {

  return shortid.generate()
}

addStyles()
function Generalcalculator(props) {

  const [equation, setEquation] = useState('');
  const [evaluatable, seteval] = useState('');
  const eqn = useRef()
  const move = () => {
    eqn.current.mathField.__controller.container.css('width', '100%')

  }
  const fieldnavigation = (type) => {
    switch (type) {
      default:
        return eqn.current.mathField.__controller.backspace()
      case 'backspace':
        return eqn.current.mathField.__controller.backspace()
      case 'left':
        return eqn.current.mathField.__controller.moveLeft()
      case 'right':
        return eqn.current.mathField.__controller.moveRight()
      case 'clearall':
        try {
          eqn.current.mathField.__controller.keystroke('Ctrl-A','Keypress')
        } catch (error) {

        }
        
        eqn.current.mathField.__controller.backspace()
        break
    }

  }
  const typetext = (text, shift = null) => {
    eqn.current.mathField.__controller.paste(text)
    if (shift) {
      for (let i = 0; i < shift; i++) {
        eqn.current.mathField.__controller.moveLeft()
      }
    }
  }
  useEffect(() => {
    eqn.current.mathField.__controller.options.substituteTextarea()
    move()
  }, [])
  console.log()
  const calculate = () => {

    console.log()

    let generalsolution = equation
    generalsolution = fixformatting(generalsolution)
    if (regex.fieldchecker(equation) && equation.includes('=') === false) {
      // ..........differentials and space check................
      regex.int_regex.lastIndex = 0
      regex.limit_regex.lastIndex = 0

      //.................integral check......................

      let integral_groups = regex.int_regex.exec(generalsolution)
      while (integral_groups != null) {
        if (!integral_groups[1] && !integral_groups[2] && !integral_groups[5] && !integral_groups[6]) {
          generalsolution = generalsolution.replace(integral_groups[0], `integrate(${integral_groups[3]},${integral_groups[4]})`)
        } else {
          generalsolution = generalsolution.replace(integral_groups[0], `defint(${integral_groups[3] ? integral_groups[3] : integral_groups[7]},${integral_groups[1] ? integral_groups[1] : integral_groups[5]}, ${integral_groups[2] ? integral_groups[2] : integral_groups[6]},${integral_groups[4] ? integral_groups[4] : integral_groups[8]})`)
        }
        integral_groups = regex.int_regex.exec(equation)
      }
      //.............limits check.................
      generalsolution = formatlimits(generalsolution)
      console.log(generalsolution)
      let realsol = solveProblem(generalsolution, false)
      return seteval(realsol)

    } else if (!regex.fieldchecker(equation) && equation.includes('=') && !equation.includes('sum') && !equation.includes('prod')) {

      let realsol = solveProblem(generalsolution, true)
      return seteval(realsol)
    } else if (!regex.fieldchecker(equation) && equation.includes('=') === false && inequality(equation)) {//solve inequality
      let newsol = equation
      newsol = formatlogequation(newsol)
      if (newsol.includes('>')) {
        let match = findineq(newsol)

        let sol = nerdamer(match[1]).gt(match[2])

        return seteval(sol.toString())


      } else if (newsol.includes('<')) {
        let match = findineq(newsol)
        let sol = nerdamer(match[1]).lt(match[2])

        return seteval(sol.toString())

      } else if (newsol.includes('\\le')) {
        let match = findineq(newsol)
        let sol = nerdamer(match[1]).lte(match[2])
        return seteval(sol.toString())
      } else if (newsol.includes('\\ge')) {
        let match = findineq(newsol)

        let sol = nerdamer(match[1]).gte(match[2])
        return seteval(sol.toString())
      }
    }


    else {
      let realsol = solveProblem(generalsolution, false)
      return seteval(realsol)

    }


  }


  //rendering

  return (
    <main className={Generalcalc.uigrid}>
      
      <div className={`${Generalcalc.editorarea}`}>
        <div className={`${Generalcalc.editor}`}>
          <EquationEditor

            value={equation}
            ref={eqn}
            onChange={(e) => { setEquation(e); seteval('') }}
            autoCommands="pi theta sqrt sum prod alpha beta gamma rho"
            autoOperatorNames="sin cos tan sinh cosh tanh" />

        </div>
      </div>
      <div onClick={props.closenav} className={`${Generalcalc.solutionspace}`}>
        <div className={`${Generalcalc.solutionwrapper}`}>
          {evaluatable ? (<><div className={`${Generalcalc.solution}`}>Solution: </div>
            <div key={getshortid()} className={Generalcalc.mathsolution}><StaticMathField>{evaluatable}</StaticMathField></div></>) : ''}
        </div>
        <div className={Generalcalc.adspace2}>Add space 2</div>
      </div>
      <div className={Generalcalc.inputsection} unselectable="on">
        <div onClick={calculate} className={Generalcalc.solvebtn}><span>Solve</span></div>
        <Calcnav input={typetext} navigationbtn={fieldnavigation} />
      </div>

    </main>

  );
}

export default Generalcalculator