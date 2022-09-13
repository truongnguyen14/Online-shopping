import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './login.css'

function Login(){
    const [user, setUser] = useState({
        email:'', password: ''
    })

    const [error, setError] = useState({
        email: '',
        password: ''
    })
  
    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
        Validate(e);
    }
    
    const Validate = e =>{
        const {name, value} = e.target;
        setError(prev => {
            const stateObj = { ...prev, [name]: "" };
            switch (name) {
                case "email":
                    if(!value) {
                        stateObj[name] = "Please enter your email."; 
                        document.getElementById('submit').disabled=true;
                    } document.getElementById('submit').disabled=false;
                    break;
                
                case "password":
                    if (!value) {
                        stateObj[name] = "Please enter Password.";
                        document.getElementById('submit').disabled=true;
                      }  document.getElementById('submit').disabled=false;
                      break; 
                      default:
                        break;
            }
          return stateObj;
        });
        }
        
    const loginSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('/user/login', {...user})
  
            localStorage.setItem('firstLogin', true)
            
            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="loginpage">
            <form onSubmit={loginSubmit}>
                <h2>Login</h2>
                <input type="email" name="email" required 
                placeholder="Email" value={user.email} onChange={onChangeInput} onBlur={Validate}/>
                 {error.email && <span className='error'>{error.email}</span>}
                <input type="password" name="password" required autoComplete="on"
                placeholder="Password" value={user.password} onChange={onChangeInput} onBlur={Validate}/>
                 {error.password && <span className='error'>{error.password}</span>}
                <div className="row">
                    <button id="submit" type="submit">Login</button>
                    <p>--New to RMIT--</p>
                    <Link to="/register">Register</Link>
                </div>
            </form>
        </div>
    )
}
export default Login