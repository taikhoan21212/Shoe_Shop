import './header.css';
import React, { useState,useContext, useEffect } from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown, faSearch, faShoppingCart,faBell} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Badge } from 'rsuite';
import {CartContext} from "../pages/cart/CartContext"
import axios from 'axios';
import { useSelector } from 'react-redux';
 


function Header_down() {
    
    const { cartItems, setCartItems } = useContext(CartContext);
    const cartN = cartItems.reduce((total, item) => total + item.quantity, 0);
    const [isOpen, setIsOpen] = useState(false);
    const [hasOrder, setHasOrder] = useState(false)


    // useEffect(() => {
    //     if(user){
    //     const userID = user._id;
    //     axios
    //     .get(`${process.env.REACT_APP_API_URL}order/find/${userID}`)
    //     .then((res) => {
    //             if(res.data.length > 0){
    //                 setHasOrder(true);
    //             }else{
    //                 setHasOrder(false);
    //             }
    //             })
    //             .catch((error) => {
    //               console.log(error);
    //             });
    //         }
    // }, [hasOrder]);


    useEffect(() => {
        if (cartN > 0) {
            setIsOpen(true);
        }else {
            setIsOpen(false);
        }
    }, [cartN]);


    const user = useSelector((state)=> state.auth.login.currentUser);


      useEffect(() => {
          if(user){
            const userID = user._id;
            const newCart = {
                userId: userID,
                products: Array.from(cartItems)
            };
            // console.log("tài khoản đẵ thay đổi");
            axios
            .get(`${process.env.REACT_APP_API_URL}cart/find/${userID}`)
            .then((res) => {
              const data = res.data;
            //   console.log(data);
            //   console.log(data.length);
            //   console.log(userID);
            //   console.log(data[0].products.length);
              if (data.length === 0) {
                  axios
                    .post(`${process.env.REACT_APP_API_URL}cart/add`, newCart)
                    .then((res) => {
                    //   console.log("Thêm mới giỏ hàng thành công");
                    })
                    .catch((error) => {
                      console.log(error);
                    });
              } else if(data.length === 1 && data[0].products.length > 0){ 
                const foundCartItems = data[0].products;
                // console.log(foundCartItems.length);
                if (foundCartItems.length > 0) { // Kiểm tra cartItems chưa có giá trị
                  setCartItems(foundCartItems);
                //   setCartId(data[0]._id);
                //   console.log("gắn giỏ hàng");
                }
          }})
          .catch((error) => {
            console.log(error);
          });

          axios
        .get(`${process.env.REACT_APP_API_URL}order/find/${userID}`)
        .then((res) => {
                if(res.data.length > 0){
                    setHasOrder(true);
                }else{
                    setHasOrder(false);
                }
                })
                .catch((error) => {
                  console.log(error);
                });
      }
    }, [user])
    useEffect(() => {
        if (user) {
          const userID = user._id;
          const newCart = {
            userId: userID,
            products: cartItems
            };
            axios
            .put(`${process.env.REACT_APP_API_URL}cart/find/${userID}`, newCart)
            .then((res) => {
                    // console.log("Cập nhật giỏ hàng thành công");
                    })
                    .catch((error) => {
                      console.log(error);
                    });
        }
      }, [cartItems]);




    const Menu = () => {
        const [isOpen, setIsOpen] = useState(false);

        const toggleMenu = () => {
            setIsOpen(!isOpen);
        };
    }
//     function toggleMenu() {
//         var menu = document.querySelector('.menu-ul-mobile');
//         menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
// }
    return (
        <div className="header_down">
            <div className="header_down-scroll">
                <div className="header_down-center-mobile">
                    <div className="header_down-menu-mobile">
                        <div className="icon-timelint" >
                            <FontAwesomeIcon icon={faBars} />

                            <ul className="menu-ul-mobile">
                                <li className="header_down-menu-home-mobile"><Link to="/" >TRANG CHỦ</Link></li>
                                <li className="header_down-menu-pages-mobile"><Link to="/ProductsMale" >NAM</Link>

                                    <FontAwesomeIcon icon={faChevronDown} />
                                    <ul className="subnav-mobile">
                                        <li><a href="#">Hunter</a></li>
                                        <li><a href="#">Sandan</a></li>
                                        <li><a href="#">Media</a></li>
                                    </ul>
                                </li>
                                <li className="header_down-menu-pages-mobile"><Link to="/ProductsFemale">NỮ</Link>
                                    <FontAwesomeIcon icon={faChevronDown} />
                                    <ul className="subnav-mobile">
                                        <li><a href="#">Hunter</a></li>
                                        <li><a href="#">Sandan</a></li>
                                        <li><a href="#">Guốc</a></li>
                                    </ul>
                                </li>
                                <li className="header_down-menu-products-mobile"><Link to="/ProductList">SẢN PHẨM</Link>
                                </li>
                                <li className="header_down-menu-blog-mobile"><a href="#">BLOG</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="header_down-left">
                    <div className="header_down-logo">
                        <Link to="/">
                            <img src={require('../img/shoe.png')} alt="logo" className="logo-img" />SHOES(TQN)</Link>
                    </div>
                </div>
                <div className="header_down-center">
                    <div className="header_down-menu">
                        <ul className="menu-ul">
                            <li className="header_down-menu-home"><Link to="/">TRANG CHỦ</Link></li>
                            <li className="header_down-menu-pages"><Link to="/ProductsMale" >NAM</Link>
                                <FontAwesomeIcon icon={faChevronDown} />
                                <ul className="subnav">
                                    <li><a href="#">Hunter</a></li>
                                    <li><a href="#">Sandan</a></li>
                                    <li><a href="#">Media</a></li>
                                </ul>
                            </li>
                            <li className="header_down-menu-pages"><Link to="/ProductsFemale">NỮ</Link>
                                <FontAwesomeIcon icon={faChevronDown} />
                                <ul className="subnav">
                                    <li><a href="#">Hunter</a></li>
                                    <li><a href="#">Sandan</a></li>
                                    <li><a href="#">Guốc</a></li>
                                </ul>
                            </li>
                            <li className="header_down-menu-products"><Link to="/ProductList">SẢN PHẨM</Link>
                            </li>
                            <li className="header_down-menu-blog"><a href="#">BLOG</a></li>
                        </ul>
                    </div>
                </div>
                <div className="header_down-right">
                    <div className="header_down-right-search">
                        {/* <a id="search-button" onClick="toggleSearchBar()"><FontAwesomeIcon icon={faSearch} /></a>
                        <input type="text" className="search-bar" id="search-bar" placeholder="Nhập từ khóa tìm kiếm" /> */}
                        <div className="item no-border drop-left-padding">
                            <div className="ui icon input icon">
                                <input placeholder="tìm kiếm" type="text" className="search-bar" />
                                <a id="search-button" onClick="toggleSearchBar()"><FontAwesomeIcon icon={faSearch} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="header_down-right-cart">
                        <Link to="/Cart">
                            {isOpen ? (<Badge content={cartN}><FontAwesomeIcon icon={faShoppingCart} /></Badge>):(<FontAwesomeIcon icon={faShoppingCart} />)}</Link>
                    </div>
                    {user && hasOrder ?(                    
                    <div className="header_down-right-order">
                        <Link to="/MyOrder">
                            {hasOrder ? (<Badge content={hasOrder}><FontAwesomeIcon icon={faBell} /></Badge>):
                            (<FontAwesomeIcon icon={faBell} />)}</Link>
                    </div>):(<></>)}

                </div>
            </div>
        </div>
    );
}

export default Header_down;