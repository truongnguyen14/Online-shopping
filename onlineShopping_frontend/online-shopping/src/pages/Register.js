import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Register() {
  const [user, setUser] = useState({
    name:'', email:'', password: ''
  })

    const [error, setError] = useState({
        name: '',
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
            case "name":
                if(!value) {
                    stateObj[name] = "Please enter your name."; 
                    document.getElementById('submit').disabled=true;
                } break;

            case "email":
                if(!value) {
                    stateObj[name] = "Please enter your email."; 
                    document.getElementById('submit').disabled=true;
                } break;
            
            case "password":
                if (!value) {
                    stateObj[name] = "Please enter Password.";
                    document.getElementById('submit').disabled=true;
                  } break; 

            case "confirmPassword":
                if (!value) {
                    stateObj[name] = "Please enter Confirm Password.";
                    document.getElementById('submit').disabled=true;
                } else if (user.password && value !== user.password) {
                    stateObj[name] = "Password and Confirm Password does not match.";
                    document.getElementById('submit').disabled=true;
                } else if(user.password && value == user.password){
                    document.getElementById('submit').disabled=false;
                }
                break;
                default:
                break;
      }
 
      return stateObj;
    });
  }

  const registerSubmit = async e =>{
    e.preventDefault()
    try {
      await axios.post('/user/register', {...user})

      localStorage.setItem('firstLogin', true)

      window.location.href = "/";
    } catch (err) {
      alert(err.response.data.msg)
    }
  }
 
  return (
    <div className="login-page">
      <form onSubmit={registerSubmit}>
        <h2>Register</h2>
        <input type="text" name="name" required 
        placeholder="Name" value={user.name} onChange={onChangeInput} onBlur={Validate}/> 
         {error.name && <span className='err'>{error.name}</span>} 
        <input type="email" name="email" required 
        placeholder="Email" value={user.email} onChange={onChangeInput} onBlur={Validate}/>
         {error.email && <span className='err'>{error.email}</span>}
        <input type="password" name="password" required autoComplete="on"
        placeholder="Password" value={user.password} onChange={onChangeInput} onBlur={Validate}/>
         {error.password && <span className='err'>{error.password}</span>}
        <input type="password" name="confirmPassword" 
        placeholder="Re-enter Password" onChange={onChangeInput} onBlur={Validate} />
         {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}
        <div className="row">
          <button id="submit" type="submit">Create your RMIT prime account</button>
          <Link to="/login">If you already have account then why are you here? please move to the login page</Link>
        </div>
      </form>
    </div>
  )
}

export default Register