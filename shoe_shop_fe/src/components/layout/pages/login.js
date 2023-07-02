import React, {useState} from 'react';
import "./login.module.scss"
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from '../../../redux/apiRequest';
import { useDispatch } from 'react-redux';

const Login = () => {

  const [username, setUsername] = useState("myAdmin");
  const [password, setPassword] = useState("myadmin");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [mes, setMes] = useState("");
  const [IsLoggedIn, setIsLoggedIn] = useState(false);

  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const newUser = {
        username : username,
        password : password  
      };
      const Logg = await loginUser(newUser, dispatch);
      if(Logg){
        setMes(newUser.username +" Login successful");
        setError(true);
        setIsLoggedIn(true);
        setTimeout(() =>navigate("/"),500);
      }else{
        setMes("Login failed!!!");
        setError(true);
        setTimeout(() =>setError(false),2000)
      };
    };

    return (

        <>
        <section>
        <div className="login-box">
        <h2>Login</h2>
        {error? (<><div className='mess-Log'><p>{mes}</p></div></>):(<>
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
        </>)}
      </div>
      </section>
      </>
      )
    }

export default Login;