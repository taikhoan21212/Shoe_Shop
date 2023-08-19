import React, {useState} from 'react';
import "./login.css"
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from '../../../../redux/apiRequest';
import { useDispatch } from 'react-redux';

const Login = () => {

  const [username, setUsername] = useState("kimngoc");
  const [password, setPassword] = useState("123456");
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
        setMes(newUser.username +" Đăng nhập thành công!");
        setError(true);
        setIsLoggedIn(true);
        setTimeout(() =>navigate("/"),500);
      }else{
        setMes("Tên đăng nhập hoặc mật khẩu không đúng");
        setError(true);
        setTimeout(() =>setError(false),2000)
      };
    };

    return (

        <>
        <section>
        <div className="login-box">
        <h2>Đăng nhập</h2>
        {error? (<><div className='mess-Log'><p>{mes}</p></div></>):(<>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input type="text" id="username"  name="username"  autoComplete='off'
             onChange={(e) => setUsername(e.target.value)} value={username} required/>
            <label>Tên đăng nhập</label>
          </div>
          <div className="user-box">
            <input type="password" id="password" name="password" 
             onChange={(e) => setPassword(e.target.value)} value={password}  required autoComplete='on'/>
            <label>Mật khẩu</label>
          </div>
          <p>Không có tài khoản? <Link to="/register">Đăng ký</Link></p>
          <input type="submit" value="SUBMIT" />
        </form>
        </>)}
      </div>
      </section>
      </>
      )
    }

export default Login;