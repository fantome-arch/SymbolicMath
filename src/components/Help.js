import React from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Helpcss from '../styles/Helppage.module.css'
function Help(props) {
  return (
    <div className={Helpcss.container}>
      <div className={Helpcss.innercontainer}>
        <span>
          <h1 className={Helpcss.headings}>How to use</h1>
          <p className={Helpcss.paragraph}>Click/Tap on the keyboard provided in order to enter mathematical expressions in the math field.
            use <span className={Helpcss.navbutton}><BsArrowLeft /></span > and <span className={Helpcss.navbutton}><BsArrowRight /></span> buttons in order to navigate through the math field.
            Alternatively, you can use a physical keyboard to enter expressions and the arrow keys to navigate through the field.
            If you are familiar with LaTeX you can directly type in LaTeX commands using a physical keyboard to enter various expressions.


          </p>
        </span>
        <span>
          <h1 className={Helpcss.headings}>Using certain functions</h1>
          <p className={Helpcss.paragraph}>Some functions such as lcm and gcd require you to enter two and more numbers, make sure to separate each number using a ','.</p>
        </span>
        <span>
          <h1 className={Helpcss.headings}>Angle measurements</h1>
          <p className={Helpcss.paragraph}>By default the calculator uses radians as the unit of measurements for angles.
            If you want to use degree make sure to use the degree (°) symbol it will automacally use degree as the unit of measurement.
          </p>
        </span>
        <span>
          <h1 className={Helpcss.headings}>Solving simultaneous equations</h1>
          <p className={Helpcss.paragraph}>You can solve simultaneous equations by simplying typing in the equations 
          where each equation is separated by a comma ','.
          </p>
        </span>
      </div>
    </div>
  )
}

export default Help