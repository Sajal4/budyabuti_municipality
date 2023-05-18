import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landingpage = () => {
    const navigate = useNavigate();
  return (
  <div style={{display:"flex", alignItems:"center", gap:"100px"}}>
    <div className="leftContainer"></div>
    <div className="btn-Cntnr">
      <button onClick={()=>navigate('/signup')} className='Btn'>Sign up</button>
      <p>or</p>
      <button onClick={()=>navigate('/login')} className='Btn'>Login</button>
    </div>
  </div>
  )
}

export default Landingpage