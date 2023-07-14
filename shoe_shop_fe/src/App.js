import './App.css';
import react from 'react'
import { BrowserRouter , Routes, Route} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/homepage';
import Login from './components/layout/pages/login/login';
import HeaderDown from './components/layout/header/header-down';
import HeaderTop from './components/layout/header/header-top';
import Footer from './components/layout/footer/footer';
import Add_Edit_Product from './components/layout/pages/edit-add-product/Add_Edit_Product';

function App() {
    return (
        <BrowserRouter>
        <div className='App'>
            <div className="header">
                <HeaderTop />
                <HeaderDown />
            </div>
            <div className='main'>
                <Routes>
                    <Route exact path="/" element={<Homepage/>} />
                    <Route path="/Logout" element={<Homepage/>} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/PageAdmin/AddProduct" element={<Add_Edit_Product />} />
                    <Route path="/PageAdmin/EditProduct/:id" element={<Add_Edit_Product />} />
                </Routes>
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
