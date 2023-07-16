import React, {useState} from 'react';
import "./register.css"
import { Link , useNavigate} from "react-router-dom";
import { registerUser } from '../../../../redux/apiRequest';
import { useDispatch } from 'react-redux';
import useConfirmExit from '../../../useConfirmExit';

const Register = () => {
    useConfirmExit();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cfpassword, setCfpassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const [mes, setMes] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
    const newUser = {
        username : username,
        password : password,
        email : email
    };
    const reg = await registerUser(newUser, dispatch);
    if(reg){
        setMes(newUser.username +" Successful");
        setError(true);
        setTimeout(() =>navigate("/login"),500);
    }else{
        setMes("Username hoặc email đã tồn tại");
        setError(true);
        setTimeout(() =>setError(false),2000)
    };
};
 


    return (
       <>
       <section>
        <div className='register-box'>
            <h2>Registration Form</h2>
            {error? (<><div className='mess-Log'><p>{mes}</p></div></>):(<>
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
                    <input type="password" id="cfpassword" pattern={password} name="cfpassword" onChange={(e) => setCfpassword(e.target.value)} value={cfpassword} title="Confirm password must be the same password" required/>
                    <label>Confirm Password</label>
                </div>
                <p>Already have an account? <Link to="/login">Sign in</Link></p>
                <input type="submit" value="REGISTER" />
            </form>
            </>)}
        </div>
        </section>
        </>
    )
}


export default Register;