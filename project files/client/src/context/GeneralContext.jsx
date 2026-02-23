import React, { createContext, useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const GeneralContext = createContext();

const GeneralContextProvider = ({children}) => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usertype, setUsertype] = useState('');

  const [ticketBookingDate, setTicketBookingDate] = useState();

  const inputs = {username, email, usertype, password};


  const navigate = useNavigate();

  const login = async () =>{
    if(!email || !password){
      alert('Please fill all fields');
      return;
    }
    try{
      const loginInputs = {email, password}
        await axios.post('http://localhost:6001/login', loginInputs)
        .then( async (res)=>{

            localStorage.setItem('userId', res.data._id);
            localStorage.setItem('userType', res.data.usertype);
            localStorage.setItem('username', res.data.username);
            localStorage.setItem('email', res.data.email);

            if(res.data.usertype === 'customer'){
                navigate('/');
            } else if(res.data.usertype === 'admin'){
                navigate('/admin');
            } else if(res.data.usertype === 'flight-operator'){
              navigate('/flight-admin');
            }
        }).catch((err) =>{
            console.log('Login error:', err.response?.data || err.message);
            alert(err.response?.data?.message || "Login failed!!");
        });

    }catch(err){
        console.log('Login error:', err);
        alert('Login failed. Please check console.');
    }
  }
  
  const register = async () =>{
    if(!username || !email || !password || !usertype){
      alert('Please fill all fields');
      return;
    }
    try{
        await axios.post('http://localhost:6001/register', inputs)
        .then( async (res)=>{
            localStorage.setItem('userId', res.data._id);
            localStorage.setItem('userType', res.data.usertype);
            localStorage.setItem('username', res.data.username);
            localStorage.setItem('email', res.data.email);

            if(res.data.usertype === 'customer'){
                navigate('/');
            } else if(res.data.usertype === 'admin'){
                navigate('/admin');
            } else if(res.data.usertype === 'flight-operator'){
              navigate('/flight-admin');
            }

        }).catch((err) =>{
            console.log('Registration error:', err.response?.data || err.message);
            alert(err.response?.data?.message || "Registration failed!!");
        });
    }catch(err){
        console.log('Registration error:', err);
        alert('Registration failed. Please check console.');
    }
  }



  const logout = async () =>{
    
    localStorage.clear();
    for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        localStorage.removeItem(key);
      }
    }
    
    navigate('/');
  }



  return (
    <GeneralContext.Provider value={{login, register, logout, username, setUsername, email, setEmail, password, setPassword, usertype, setUsertype, ticketBookingDate, setTicketBookingDate}} >{children}</GeneralContext.Provider>
  )
}

export default GeneralContextProvider
