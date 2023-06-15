import './product.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import product1 from '../img/product1.webp'

function product_hot() {
    window.onscroll = function () {
        var navbar = document.querySelector('.header_down');
        var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollPosition <= 20) {
            navbar.style.top = "40px";
        } else {
            navbar.style.top = "0";
        }
    }
    return (
        <div class="content">
            <div class="content_product">
                <div class="content_product-hot">
                    <div class="content_product-hot-title">
                        <h3>Sản phẩm nổi bật</h3>
                    </div>
                    <div class="content-product-hot-list row">
                        <div class="col-12 col-md-4 col-sm-6 col-lg-3 mt-10">
                            <img src={product1} alt="" class="product-img" />
                            <div class="place-body">
                                <h3 class="place-heading">Giày Biti's hunter</h3>
                                <p class="place-time">Giày Thể Thao Nam Biti's Hunter Core Hmd000500REU (Rêu)6</p>
                                <p class="place-desc">700.000 đ</p>
                                <button class="btn-product s-col-full js-buy-ticket">MUA NGAY</button>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 col-sm-6 col-lg-3 mt-10">
                            <img src={product1} alt="" class="product-img" />
                            <div class="place-body">
                                <h3 class="place-heading">Giày Biti's hunter</h3>
                                <p class="place-time">Giày Thể Thao Nam Biti's Hunter Core Hmd000500REU (Rêu)6</p>
                                <p class="place-desc">700.000 đ</p>
                                <button class="btn-product s-col-full js-buy-ticket">MUA NGAY</button>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 col-sm-6 col-lg-3 mt-10">
                            <img src={product1} alt="" class="product-img" />
                            <div class="place-body">
                                <h3 class="place-heading">Giày Biti's hunter</h3>
                                <p class="place-time">Giày Thể Thao Nam Biti's Hunter Core Hmd000500REU (Rêu)6</p>
                                <p class="place-desc">700.000 đ</p>
                                <button class="btn-product s-col-full js-buy-ticket">MUA NGAY</button>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 col-sm-6 col-lg-3 mt-10">
                            <img src={product1} alt="" class="product-img" />
                            <div class="place-body">
                                <h3 class="place-heading">Giày Biti's hunter</h3>
                                <p class="place-time">Giày Thể Thao Nam Biti's Hunter Core Hmd000500REU (Rêu)6</p>
                                <p class="place-desc">700.000 đ</p>
                                <button class="btn-product s-col-full js-buy-ticket">MUA NGAY</button>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 col-sm-6 col-lg-3 mt-10">
                            <img src={product1} alt="" class="product-img" />
                            <div class="place-body">
                                <h3 class="place-heading">Giày Biti's hunter</h3>
                                <p class="place-time">Giày Thể Thao Nam Biti's Hunter Core Hmd000500REU (Rêu)6</p>
                                <p class="place-desc">700.000 đ</p>
                                <button class="btn-product s-col-full js-buy-ticket">MUA NGAY</button>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 col-sm-6 col-lg-3 mt-10">
                            <img src={product1} alt="" class="product-img" />
                            <div class="place-body">
                                <h3 class="place-heading">Giày Biti's hunter</h3>
                                <p class="place-time">Giày Thể Thao Nam Biti's Hunter Core Hmd000500REU (Rêu)6</p>
                                <p class="place-desc">700.000 đ</p>
                                <button class="btn-product s-col-full js-buy-ticket">MUA NGAY</button>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 col-sm-6 col-lg-3 mt-10">
                            <img src={product1} alt="" class="product-img" />
                            <div class="place-body">
                                <h3 class="place-heading">Giày Biti's hunter</h3>
                                <p class="place-time">Giày Thể Thao Nam Biti's Hunter Core Hmd000500REU (Rêu)6</p>
                                <p class="place-desc">700.000 đ</p>
                                <button class="btn-product s-col-full js-buy-ticket">MUA NGAY</button>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 col-sm-6 col-lg-3 mt-10">
                            <img src={product1} alt="" class="product-img" />
                            <div class="place-body">
                                <h3 class="place-heading">Giày Biti's hunter</h3>
                                <p class="place-time">Giày Thể Thao Nam Biti's Hunter Core HSM000500REU (Rêu)6</p>
                                <p class="place-desc">700.000 đ</p>
                                <button class="btn-product s-col-full js-buy-ticket">MUA NGAY</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default product_hot;