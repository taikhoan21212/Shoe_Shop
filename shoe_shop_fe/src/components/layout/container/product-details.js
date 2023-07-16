
import './product.css'
import product1 from '../img/product1.webp';
import React, {useState, useEffect} from "react";
import axios from 'axios';
import {useParams } from "react-router-dom";


function Product_Details() {
    const { id } = useParams();
    const [productDetail, setProductDetail] = useState(null);

    useEffect(() => {
        if (id) {
          axios
            .get(`${process.env.REACT_APP_API_URL}products/${id}`)
            .then((res) => {
              setProductDetail(res.data);
            })
            .catch(console.log);
        }
      }, [id]);


    return (
        <div className='main'>
            <div className="content">
                <div className="content_main">
                    <div className="content_container">
                        <div className="content_container-img">
                            <img src={productDetail.img[0]} alt="" className="content-product-img" />
                        </div>
                        <div className="content_container-information">
                            <div className="content_container-body">
                                <h3 className="place-time">{productDetail.title}</h3>
                                <h4 className="place-desc">{productDetail.price.toLocaleString()} đ</h4>
                                <p>Thương hiệu: {productDetail.brand}</p>
                                <p>Tình trạng: New</p>
                                <p>Giao hàng và thanh toán:
                                    Giao hàng toàn quốc và thanh toán khi nhận hàng. Bạn có thể kiểm tra sản phẩm.</p>
                                <p>Tặng hộp giày thay thế.</p>
                                <button className="btn-product s-col-full js-buy-ticket">MUA NGAY</button>
                            </div>
                        </div>
                    </div>

                    <div className="content_container-details">
                        <h3>Mô tả sản phẩm</h3>
                        <p>{productDetail.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product_Details;
