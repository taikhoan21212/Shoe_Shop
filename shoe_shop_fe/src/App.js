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
import Product_detail from  './components/layout/container/product-details'
import Register from './components/layout/pages/register/Register';
import ProductList from './components/layout/container/product-nine';

function App() {
    return (
        <BrowserRouter>
        <div className='main'>
            <div className="header">
                <HeaderTop />
                <HeaderDown />
            </div>
            
                <Routes>
                    <Route exact path="/" element={<Homepage/>} />
                    <Route path="/Logout" element={<Homepage/>} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/PageAdmin/AddProduct" element={<Add_Edit_Product />} />
                    <Route path="/PageAdmin/EditProduct/:id" element={<Add_Edit_Product />} />
                    <Route path="/ProductList" element={<ProductList />} />
                    <Route path="/Products/:id" element={<Product_detail />} />
                </Routes>
          
            
                <Footer />
            
        </div>
        </BrowserRouter>
    );
}

export default App;
