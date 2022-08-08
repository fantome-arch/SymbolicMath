// eqn.current.mathField.__controller.blurred=true
// eqn.current.mathField.__controller.moveLeft()
import React, { useState } from "react";
import Generalcalculator from './components/Generalcalculator';
import { Routes, Route, useNavigate} from 'react-router-dom'
import { AiOutlineCalculator } from 'react-icons/ai'
import mathstyle from './styles/Mathfield.module.css';
import { GiHamburgerMenu } from 'react-icons/gi'
import { FiHelpCircle } from 'react-icons/fi'
import Help from "./components/Help";
import Logo from "./components/Logo";
function App() {
  
  const [togglenav, setnav] = useState(mathstyle.navbar)
  const navigate=useNavigate()
  function togglenavigation() {
    togglenav === mathstyle.navbar ? setnav(mathstyle.navbaropen) : setnav(mathstyle.navbar)
    return
  }
  function closenav() {
    setnav(mathstyle.navbar)
  }
  return (
      <main className={mathstyle.ui}>

        <div className={mathstyle.calculatorarea} >
          <nav className={togglenav}>
            <div className={mathstyle.logocontainer}>
              <div onClick={closenav} className={mathstyle.hamburger}><GiHamburgerMenu /></div>
              <div className={mathstyle.actuallogo}>
                Symbolic Math  <AiOutlineCalculator />
              </div>
            </div>

            <div onClick={()=>{ navigate('/');closenav()}} className={`${window.location.pathname==='/'? mathstyle.navcomponentselected:mathstyle.navcomponent}`}>
              <span ><AiOutlineCalculator style={{textAlign:'center',fontSize:'2rem'}}/> Calculator</span>
            </div>
            <div onClick={()=>{ navigate('/help');closenav()}}className={`${window.location.pathname==='/help'? mathstyle.navcomponentselected:mathstyle.navcomponent}`}>
              <span ><FiHelpCircle style={{textAlign:'center',fontSize:'2rem'}}/>Help</span>
            </div>
          </nav>
          <Logo togglenav={togglenavigation} closenav={closenav}/>
          <Routes>

            <Route path='/' element={<Generalcalculator togglenav={togglenavigation} closenav={closenav} />} exact />
            <Route path='/help' element={<Help togglenav={togglenavigation} closenav={closenav} />} exact />
          </Routes>
        </div>
      </main>
    
  )
}

export default App;
