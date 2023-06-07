import React, {useState} from 'react';
import "../css/register.css"
import { Link , useNavigate} from "react-router-dom";
import { registerUser } from '../redux/apiRequest';
import { useDispatch } from 'react-redux';

const Register = () => {

    const [username, setUsername] = useState("zoe998123");
    const [email, setEmail] = useState("zoe998@gmail.com");
    const [password, setPassword] = useState("123456");
    const [cfpassword, setCfpassword] = useState("123456");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const checkPwd = () => {
        if(password !== cfpassword){
            console.log("Confirm password bị sai");
            return false;
        }else {return true;}
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(checkPwd()){console.log("ok~");
    const newUser = {
        username : username,
        password : password,
        email : email
    };
    registerUser(newUser, dispatch, navigate);
}
        
        

    };
 


    return (
       <>
       <section>
        <div className='register-box'>
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit} autoComplete="on">
                <div className="user-box">
                    <input type="text" id="username"  name="username"  onChange={(e) => setUsername(e.target.value)} value={username} required/>
                    <label>Username</label>
                </div>
                <div className="user-box">
                    <input type="email" id="email" name="email" size="65" pattern='.+@gmail.com' onChange={(e) => setEmail(e.target.value)} value={email} autoComplete="off" required/>
                    <label>Email</label>
                </div>
                <div className="user-box">
                    <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} required/>
                    <label>Password</label>
                </div>
                <div className="user-box">
                    <input type="password" id="cfpassword" name="cfpassword" onChange={(e) => setCfpassword(e.target.value)} value={cfpassword}  required/>
                    <label>Confirm Password</label>
                </div>
                <p>Already have an account? <Link to="/login">Sign in</Link></p>
                <input type="submit" value="REGISTER" />
            </form>
        </div>
        </section>
        </>
    )
}


export default Register;