import React from "react";
import { BrowserRouter , Routes, Route} from "react-router-dom";
import Login from "./page/Login.js";
import Register from "./page/Register.js";
import Home from "./page/Home.js";
import NavBar from "./page/NavBar.js";
import PageAdmin from "./page/PageAdmin"
import PageUser from "./page/PageUser"
import { Provider } from 'react-redux';



function App() {
  
  return (
    <BrowserRouter>
    <NavBar />
    <div className="App"> 
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Logout" element={<Home />} />
          <Route path="/PageAdmin" element={<PageAdmin />} />
          <Route path="/PageUser" element={<PageUser />} />
      </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
