import './header.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function header_down() {
    const Menu = () => {
        const [isOpen, setIsOpen] = useState(false);

        const toggleMenu = () => {
            setIsOpen(!isOpen);
        };
    }
    return (
        <div className="header_down">
            <div className="header_down-scroll">
                <div className="header_down-center-mobile">
                    <div className="header_down-menu-mobile">
                        <div className="icon-timelint" >
                            <FontAwesomeIcon icon={faBars} />

                            <ul className="menu-ul-mobile">
                                <li className="header_down-menu-home-mobile"><Link to="/" >TRANG CHỦ</Link></li>
                                <li className="header_down-menu-pages-mobile"><a href="./productMale.html">NAM</a>

                                    <FontAwesomeIcon icon={faChevronDown} />
                                    <ul className="subnav-mobile">
                                        <li><a href="#">Hunter</a></li>
                                        <li><a href="#">Sandan</a></li>
                                        <li><a href="#">Media</a></li>
                                    </ul>
                                </li>
                                <li className="header_down-menu-pages-mobile"><a href="./productFemale.html">NỮ</a>
                                    <FontAwesomeIcon icon={faChevronDown} />
                                    <ul className="subnav-mobile">
                                        <li><a href="#">Hunter</a></li>
                                        <li><a href="#">Sandan</a></li>
                                        <li><a href="#">Guốc</a></li>
                                    </ul>
                                </li>
                                <li className="header_down-menu-products-mobile"><a href="./productMale.html">SẢN PHẨM</a>
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
                            <li className="header_down-menu-pages"><a href="./productMale.html">NAM</a>
                                <FontAwesomeIcon icon={faChevronDown} />
                                <ul className="subnav">
                                    <li><a href="#">Hunter</a></li>
                                    <li><a href="#">Sandan</a></li>
                                    <li><a href="#">Media</a></li>
                                </ul>
                            </li>
                            <li className="header_down-menu-pages"><a href="./productFemale.html">NỮ</a>
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
                        {/* <a id="search-button" onclick="toggleSearchBar()"><FontAwesomeIcon icon={faSearch} /></a>
                        <input type="text" className="search-bar" id="search-bar" placeholder="Nhập từ khóa tìm kiếm" /> */}
                        <div class="item no-border drop-left-padding">
                            <div class="ui icon input icon">
                                <input placeholder="tìm kiếm" type="text" className="search-bar" />
                                <a id="search-button" onclick="toggleSearchBar()"><FontAwesomeIcon icon={faSearch} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="header_down-right-cart">
                        <Link to="/Cart"><FontAwesomeIcon icon={faShoppingCart} /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default header_down;