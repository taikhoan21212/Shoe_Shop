import './App.css';
import React,{ useEffect, useState } from 'react'
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
import Cart from './components/layout/pages/cart/categori';
import { CartContext } from './components/layout/pages/cart/CartContext';
import Payment from './components/layout/pages/payment';
// import axios from 'axios';
// import { useSelector } from 'react-redux';

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cartItems") || "[]");
function App() {

    const [cartItems, setCartItems] = useState(cartFromLocalStorage);    
    useEffect(() => {
        localStorage.setItem("cartItems",JSON.stringify(cartItems));
    },[cartItems]);


    // const user = useSelector((state)=> state.auth.login.currentUser);

    // useEffect(()=>{
    //     if(user){
    //         const userID = user._id;
    //         const newCart ={
    //             userId:userID,
    //             products:cartItems
    //         }
    //         axios
    //         .post(`${process.env.REACT_APP_API_URL}cart/find/${userID}`,newCart)
    //         .then((res)=>{
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //             axios
    //             .post(`${process.env.REACT_APP_API_URL}cart/add`,newCart)
    //             .then((res)=>{
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //               });
    //           });
    //         }
    // },[cartItems])



    return (
        <BrowserRouter>
        <CartContext.Provider value={{cartItems,setCartItems}}>
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
                    <Route path="/Register" element={<Register />} />
                    <Route path="/Cart" element={<Cart />} />
                    <Route path="/PageAdmin/AddProduct" element={<Add_Edit_Product />} />
                    <Route path="/PageAdmin/EditProduct/:id" element={<Add_Edit_Product />} />
                    <Route path="/Products/:id" element={<Product_detail />} />
                    <Route path="/Payment" element={<Payment />} />
                </Routes>
            </div>
                <Footer />
        </div>
        </CartContext.Provider>
        </BrowserRouter>
    );
}

export default App;