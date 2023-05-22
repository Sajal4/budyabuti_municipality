import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const SignForm = () => {
    const navigate = useNavigate();
    // const initial = {name:"", mobile:"", password:""};
    const [registered, setRegistered] = useState(false);
    const [formData, setFormData] = useState({})
    const [formErrors, setFormErrors] = useState({});
    const [passCheck, setPassCheck] = useState()
    const handleChange=(e)=>{
        setFormData({...formData, [e.target.name]:e.target.value});
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        setFormErrors(validate(formData));
        if(formData.password !== passCheck){
            alert('Passwords did not match!');
            return;
        }
        setRegistered(true);
    }
    useEffect(()=>{
        if(Object.keys(formErrors).length === 0 && registered){
            axios.post("http://localhost:4004/api/main/register", formData)
            .then((response)=>{
                alert(response.data.message);
                navigate('/');
            })
            .catch((error)=>console.log(error.message))
        }
    })
    const validate = (data)=>{
        const errors = {};
        if(!data.name){
            errors.name = "Name is required!"
        }
        if(!data.mobile){
            errors.mobile = "Mobile No. is required!"
        }
        else if(data.mobile.length !== 10){
            errors.mobile = "Enter valid Mobile No."
        }
        if(!data.password){
            errors.password = "Password is required!"
        }
        return errors;
    }
  return (
    <div style={{display:"flex", alignItems:"center", gap:"100px"}}>
        <div className="leftContainer"></div>
        <div>
            <form className='formContainer'>
                <h3>New user SignUp</h3>
                <div className='formElement'>
                    <label htmlFor='name'>Name <span style={{color:"red"}}>*</span></label>
                    <input type='text' name='name' id='name' placeholder='Enter your name' onChange={handleChange}/>
                </div>
                <p style={{color:"red"}}>{formErrors.name}</p>
                <div className='formElement'>
                    <label htmlFor='mobile'>Mobile No. <span style={{color:"red"}}>*</span></label>
                    <input type="tel" name='mobile' id='mobile' placeholder='Enter your mobile no.' onChange={handleChange}/>
                </div>
                <p style={{color:"red"}}>{formErrors.mobile}</p>
                <div className='formElement'>
                    <label htmlFor='password'>Create Password <span style={{color:"red"}}>*</span></label>
                    <input type='password' name='password' id='password' placeholder='Create your password' onChange={handleChange}/>
                </div>
                <p style={{color:"red"}}>{formErrors.password}</p>
                <div className='formElement'>
                    <label htmlFor='conPassword'>Confirm Password <span style={{color:"red"}}>*</span></label>
                    <input type='password' name='conPassword' id='conPassword' placeholder='Re-enter your password' onChange={(e)=>{setPassCheck(e.target.value)}}/>
                </div>
                <button className='formBtn' onClick={handleSubmit}>Submit</button>
            </form>
            <p style={{color:"red"}}>'*' fields are mandatory.</p>
        </div>
        <button onClick={()=>navigate('/')} className='backBtn'>Back</button>
    </div>
  )
}

export default SignForm