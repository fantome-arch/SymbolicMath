import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import Generalcalc from '../styles/Generalcalc.module.css'
import { AiOutlineCalculator } from 'react-icons/ai'
function Logo(props) {
    return (
        <div className={Generalcalc.logocontainer}>
            <div onClick={props.togglenav} className={Generalcalc.hamburger}><GiHamburgerMenu /></div>
            <div className={Generalcalc.actuallogo}>
                Symbolic Math  <AiOutlineCalculator />
            </div>
        </div>
    )
}

export default Logo 