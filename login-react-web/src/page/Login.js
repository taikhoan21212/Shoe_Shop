import React, {useState} from 'react';
import "../css/login.css"
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from '../redux/apiRequest';
import { useDispatch } from 'react-redux';

const Login = () => {

  const [username, setUsername] = useState("zoe998");
  const [password, setPassword] = useState("123456");
  const dispatch = useDispatch();
  const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
          username : username,
          password : password
        }
        loginUser(newUser, dispatch, navigate);
    };

    return (
        <>
        <section>
        <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input type="text" id="username"  name="username"  autoComplete='off'
             onChange={(e) => setUsername(e.target.value)} value={username} required/>
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" id="password" name="password" 
             onChange={(e) => setPassword(e.target.value)} value={password}  required autoComplete='on'/>
            <label>Password</label>
          </div>
          <p>Do not have an account? <Link to="/register">Register</Link></p>
          <input type="submit" value="SUBMIT" />
        </form>
      </div>
      </section>
      </>
      )
    }

export default Login;