import React, { useState } from "react";
import Generalcalc from '../styles/Generalcalc.module.css';
import { AiOutlineCalculator, AiOutlineFunction } from 'react-icons/ai'
import { FaBackspace } from 'react-icons/fa'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { TiSortAlphabeticallyOutline } from 'react-icons/ti'
import { TbAngle } from 'react-icons/tb'
import Tabnav from "./Tabnav";

function Calcnav(props) {
    const [selected, setselected] = useState('general')
    const makeselection = (selection) => {
        setselected(selection)
    }
    return (
        <div>
            <div className={Generalcalc.tabcontainer}>
                <div className={Generalcalc.fieldnavigator}>
                    <div onClick={()=>{props.navigationbtn('clearall')}} className={Generalcalc.fieldbuttons}>
                        <span className={Generalcalc.latextext} >AC</span>
                    </div>
                    <div className={Generalcalc.fieldbuttons} onClick={()=>{props.navigationbtn('left')}}>
                        <BsArrowLeft />
                    </div>
                    <div className={Generalcalc.fieldbuttons} onClick={()=>{props.navigationbtn('right')}}>
                        <BsArrowRight />
                    </div>
                    <div className={Generalcalc.fieldbuttons} onMouseDown={()=>{props.navigationbtn('backspace')}}>
                        <FaBackspace />
                    </div>
                </div>
                <div className={Generalcalc.sectionnav}>
                    <div onClick={() => { makeselection('general') }} className={`${selected === 'general' ? Generalcalc.selectedtab : Generalcalc.calctabbtn}`}>
                        <AiOutlineCalculator /> <span className={Generalcalc.tabtitle}>General</span>
                    </div>
                    <div onClick={() => { makeselection('abc') }} className={`${selected === 'abc' ? Generalcalc.selectedtab : Generalcalc.calctabbtn}`}>
                        <TiSortAlphabeticallyOutline /> <span className={Generalcalc.tabtitle}>ABC</span>
                    </div>
                    <div onClick={() => { makeselection('funcs') }} className={`${selected === 'funcs' ? Generalcalc.selectedtab : Generalcalc.calctabbtn}`}>
                        <AiOutlineFunction /> <span className={Generalcalc.tabtitle}>Functions</span>
                    </div>
                    <div onClick={() => { makeselection('trig') }} className={`${selected === 'trig' ? Generalcalc.selectedtab : Generalcalc.calctabbtn}`}>
                        <TbAngle /> <span className={Generalcalc.tabtitle}>Trignometry</span>
                    </div>
                    <div onClick={() => { makeselection('calc') }} className={`${selected === 'calc' ? Generalcalc.selectedtab : Generalcalc.calctabbtn}`}>
                       ∫ dx  <span className={Generalcalc.tabtitle}> Calculus</span>
                    </div>
                </div>
            </div>
            <Tabnav name={selected} input={props.input}/>
        </div>  
    )

}
export default Calcnav;