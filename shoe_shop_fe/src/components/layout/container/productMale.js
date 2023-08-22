import './product.css'
// import product1 from '../img/product1.webp';
import React, {useState, useEffect} from "react"
import axios from 'axios';
import { Link } from 'react-router-dom';

export const ProductMale = () => {
    window.onscroll = function () {
        var navbar = document.querySelector('.header_down');
        var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollPosition <= 20) {
            navbar.style.top = "40px";
        } else {
            navbar.style.top = "0";
        }
    }
    const [productList, setProductList] = useState([])
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URL}products/gender/Man`)
            .then((res) => {
                setProductList(res.data)
              })
              .catch((error) => {
                console.log(error);
              });
    },[])
    
    return (
        <div className="content">
            <div className="content_product">
                <div className="content_product-hot">
                    <div className="content_product-hot-title">
                        <h3>Sản phẩm nổi bật</h3>
                    </div>
                    <div className="content-product-hot-list row">
                    {productList.map(product=>{
                        let isOutOfStock = false;
                        const sizeColorRemaining = product.size_color_remaining;
                        const sizeRemaining = sizeColorRemaining[0].size_remaining;
                        // console.log(sizeRemaining);
                        const totalRemaining = sizeRemaining.reduce((accumulator, currentValue) => accumulator + currentValue.remaining, 0);
                         //console.log(totalRemaining);
                        if(totalRemaining < 1){
                        isOutOfStock = true;
                        }
                        return(<>
                        <div key={product._id} className="col-12 col-md-4 col-sm-6 col-lg-3">
                            <Link to={`/Product/${product._id}`} className="product-link">
                            <img src={product.img[0]} alt="" className="product-img" />
                            <div className="place-body">
                                <h3 className="place-heading">Giày {product.brand} {product.category}</h3>
                                <p className="place-time">{product.title}</p>
                                {isOutOfStock ? (<>
                                <p className="place-desc-outofstock">Sold out</p>
                                 <button className="btn-product s-col-full js-buy-ticket">XEM</button>
                                 </>) : (<>
                                 <p className="place-desc">{product.price.toLocaleString()} đ</p>
                                 <button className="btn-product s-col-full js-buy-ticket">MUA NGAY</button></>)}
                                
                            </div>
                            </Link>
                        </div></>)})}
                    </div>
                </div>
            </div>
        </div>
    );
}

    export default ProductMale;