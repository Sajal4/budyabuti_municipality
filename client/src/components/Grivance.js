import React, { useState } from 'react'
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai"
import ComplainForm from './ComplainForm';

const Grivance = () => {
  const [arrow1, setArrow1]=useState(false);
  const [arrow2, setArrow2]=useState(false);
  const [arrow3, setArrow3]=useState(false);
  const [arrow4, setArrow4]=useState(false);
  const [showFrom, setShowForm]=useState(false);
  const [showMsg, setShowMsg]=useState(false);
  const handleDownFirst=()=>{
    setArrow1(!arrow1);
    setArrow2(false);
    setArrow3(false);
    setArrow4(false);
  }
  const handleDownSec=()=>{
    setArrow2(!arrow2);
    setArrow1(false);
    setArrow3(false);
    setArrow4(false);
  }
  const handleDownThd=()=>{
    setArrow3(!arrow3);
    setArrow1(false);
    setArrow2(false);
    setArrow4(false);
  }
  const handleDownFrt=()=>{
    setArrow4(!arrow4);
    setArrow1(false);
    setArrow2(false);
    setArrow3(false);
  }
  const handleShowForm=()=>{
    setShowForm(true);
    setArrow1(false);
    setArrow2(false);
    setArrow3(false);
    setArrow4(false);
  }
  const hideForm=()=>{
    setShowForm(false);
    setShowMsg(false);
  }
  const handleMsg=()=>{
    setShowMsg(true);
    setShowForm(false);
  }
  return (
    <div>
        <div className="linkBar">
          {arrow1 ? <div className='btnDiv'>
            <button onClick={handleDownFirst}>Sewage Waste  <AiFillCaretUp/></button>
            <button onClick={handleShowForm}>Waste Collection from any Premises</button>
            <button onClick={handleShowForm}>Waste Stuck in a Location</button>
            <button onClick={handleShowForm}>Throwing Garbage</button>
          </div> : <div className='btnDiv'><button onClick={handleDownFirst}>Sewage Waste  <AiFillCaretDown/></button></div>}
          {arrow2 ? <div className='btnDiv'>
            <button onClick={handleDownSec}>Plastic Related<AiFillCaretUp/></button>
            <button onClick={()=>alert('It is OK to use Plastic above 120 Micron !')}>Above 120 Micron</button>
            <button onClick={handleShowForm}>Below 120 Micron</button>
          </div> : <div className='btnDiv'><button onClick={handleDownSec}>Plastic Related<AiFillCaretDown/></button></div>}
          {arrow3 ? <div className='btnDiv'>
            <button onClick={handleDownThd}>Ganga Pollution<AiFillCaretUp/></button>
            <button onClick={handleShowForm}>Open Defecation</button>
            <button onClick={handleShowForm}>Throwing Garbage</button>
          </div> : <div className='btnDiv'><button onClick={handleDownThd}>Ganga Pollution<AiFillCaretDown/></button></div>}
          <button onClick={handleMsg}>Septic Tank & Vat</button>
          {arrow4 ? <div className='btnDiv'>
            <button onClick={handleDownFrt}>ODF<AiFillCaretUp/></button>
            <button onClick={handleDownFrt}>Guidelines</button>
          </div> : <div className='btnDiv'><button onClick={handleDownFrt}>ODF<AiFillCaretDown/></button></div>}
        </div>
        <div className='Container'>
        {showFrom ? <div className='cmpln-Cntnr'>
          <ComplainForm/>
          <button onClick={hideForm} className='backBtn'>Back</button>
        </div> : null}
        {showMsg ? <div className='msgBox'>
          <h2>Please contact with the Municipality !</h2>
          <button onClick={hideForm} className='backBtn'>OK</button>
        </div> : null}
        </div>
    </div>
  )
}

export default Grivance;