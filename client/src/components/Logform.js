import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Logform = () => {
    const navigate = useNavigate();
    const [logData, setLogData] = useState({});
    const handleChange=(e)=>{
        setLogData({...logData, [e.target.name]:e.target.value});
      }
    const handleLog=(e)=>{
        e.preventDefault();
        if(!logData.mobile || !logData.password){
            alert("All fields are required !");
            return;
        }
        else{
            axios.post("http://localhost:4004/api/main/login", logData)
            .then((response)=>{
                alert(response.data.message);
                const token = response.data.Token;
                if(token){
                    localStorage.setItem('receivedToken', token);
                    navigate('/grivance');
                }
            })
        }
        console.log(logData);
    }
  return (
    <div style={{display:"flex", alignItems:"center", gap:"100px"}}>
        <div className="leftContainer"></div>
        <div>
            <form className='logFormContainer'>
                <h3>Existing user LogIn</h3>
                <div className='formElement'>
                    <label htmlFor='mobile'>Mobile No. <span style={{color:"red"}}>*</span></label>
                    <input type="number" name='mobile' id='mobile' placeholder='enter registered mobile number' onChange={handleChange}/>
                </div>
                <div className='formElement'>
                    <label htmlFor='password'>Password <span style={{color:"red"}}>*</span></label>
                    <input type='password' name='password' id='password' placeholder='enter password' onChange={handleChange}/>
                </div>
                <button className='formBtn' onClick={handleLog}>LogIn</button>
            </form>
            <p style={{color:"red"}}>'*' fields are mandatory.</p>
        </div>
        <button onClick={()=>navigate('/')} className='backBtn'>Back</button>
    </div>
  )
}

export default Logform