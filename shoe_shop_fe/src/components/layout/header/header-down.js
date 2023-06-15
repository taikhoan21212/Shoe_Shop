import './header.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown, faSearch, faShoppingCart} from '@fortawesome/free-solid-svg-icons';

function header_down() {
    function toggleSearchBar() {
        var searchBar = document.getElementById("search-bar");
        searchBar.classList.toggle("active");
    }

    function toggleMenu() {
        var menu = document.querySelector('.menu-ul-mobile');
        menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    }
    return (
        <div class="header_down">
            <div class="header_down-scroll">
                <div class="header_down-center-mobile">
                    <div class="header_down-menu-mobile">
                        <div class="icon-timelint">
                            <FontAwesomeIcon icon={faBars} />

                            <ul class="menu-ul-mobile">
                                <li class="header_down-menu-home-mobile"><a href="./index.html">TRANG CHỦ</a></li>
                                <li class="header_down-menu-pages-mobile"><a href="./productMale.html">NAM</a>

                                    <FontAwesomeIcon icon={faChevronDown} />
                                    <ul class="subnav-mobile">
                                        <li><a href="#">Hunter</a></li>
                                        <li><a href="#">Sandan</a></li>
                                        <li><a href="#">Media</a></li>
                                    </ul>
                                </li>
                                <li class="header_down-menu-pages-mobile"><a href="./productFemale.html">NỮ</a>
                                    <FontAwesomeIcon icon={faChevronDown} />
                                    <ul class="subnav-mobile">
                                        <li><a href="#">Hunter</a></li>
                                        <li><a href="#">Sandan</a></li>
                                        <li><a href="#">Guốc</a></li>
                                    </ul>
                                </li>
                                <li class="header_down-menu-products-mobile"><a href="./productMale.html">SẢN PHẨM</a>
                                </li>
                                <li class="header_down-menu-blog-mobile"><a href="#">BLOG</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="header_down-left">
                    <div class="header_down-logo">
                        SHOES (TQN)
                    </div>
                </div>
                <div class="header_down-center">
                    <div class="header_down-menu">
                        <ul class="menu-ul">
                            <li class="header_down-menu-home"><a href="#">TRANG CHỦ</a></li>
                            <li class="header_down-menu-pages"><a href="./productMale.html">NAM</a>
                            <FontAwesomeIcon icon={faChevronDown} />
                                <ul class="subnav">
                                    <li><a href="#">Hunter</a></li>
                                    <li><a href="#">Sandan</a></li>
                                    <li><a href="#">Media</a></li>
                                </ul>
                            </li>
                            <li class="header_down-menu-pages"><a href="./productFemale.html">NỮ</a>
                            <FontAwesomeIcon icon={faChevronDown} />
                                <ul class="subnav">
                                    <li><a href="#">Hunter</a></li>
                                    <li><a href="#">Sandan</a></li>
                                    <li><a href="#">Guốc</a></li>
                                </ul>
                            </li>
                            <li class="header_down-menu-products"><a href="./productMale.html">SẢN PHẨM</a>
                            </li>
                            <li class="header_down-menu-blog"><a href="#">BLOG</a></li>
                        </ul>
                    </div>
                </div>
                <div class="header_down-right">
                    <div class="header_down-right-search">
                        <a id="search-button" onclick="toggleSearchBar()"><FontAwesomeIcon icon={faSearch} /></a>

                        <input type="text" class="search-bar" id="search-bar" placeholder="Nhập từ khóa tìm kiếm" />
                    </div>
                    <div class="header_down-right-cart">
                        <a href="./productMale.html"><FontAwesomeIcon icon={faShoppingCart} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default header_down;