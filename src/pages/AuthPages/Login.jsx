import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { handleLogin } from '../../Authorize/UserInfo';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [Input,setInput] = useState({
    'email':'this@hey.com',
    'password':'12314',
    'id': 'hey',
})
  
 
  return (
    <div>
      Login
      <button onClick={()=>{
        
        dispatch(handleLogin(Input))
        navigate(`/home/hey`)
        }}>Click me</button>
    </div>
  );
}

export default Login;
