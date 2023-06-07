import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/navbar.css";
import {useDispatch, useSelector} from "react-redux";
import { logOut } from "../redux/apiRequest";
const NavBar = () => {
  const user = useSelector((state)=> state.auth.login.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = (e) =>{
    e.preventDefault();
    try {
      logOut(dispatch,navigate);
      //window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <nav className="navbar-container">
      <Link to="/" className="navbar-home"> Home </Link>
      {user? (
        <>
        <Link to="/PageUser"  className="navbar-user">Hi, <span> {user.username}  </span> </Link>
        { user.isAdmin? (<> <Link to="/PageAdmin" className="navbar-admin"> <span> Admin page </span> </Link> </>):(<></>)}
        <Link to="/logout" className="navbar-logout" onClick={handleLogout} > Log out</Link>
        
        </>
      ) : (<><Link to="/login" className="navbar-login"> Login </Link>
      <Link to="/register" className="navbar-register">Register</Link></>)}
    </nav>
  );
};

export default NavBar;