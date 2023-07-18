import './product.css'
import React, {useState, useEffect} from "react";
import axios from 'axios';
import {useParams } from "react-router-dom";
// import { Fade, Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'
import SimpleImageSlider from "react-simple-image-slider";

function Product_Details() {
    const { id } = useParams();
    const [productDetail, setProductDetail] = useState(null);
    const [sliderImages, setSliderImages] = useState(null);

    useEffect(() => {
          axios
            .get(`${process.env.REACT_APP_API_URL}products/${id}`)
            .then((res) => {
              setProductDetail(res.data);
              setSliderImages(res.data.img);
            })
            .catch(console.log);
        
      }, [id]);

    //   console.log(productDetail);
      
    //   console.log(sliderImages);

    return (
        <>
        {productDetail && (
        <div className='main'>
            <div className="content">                    
                <div className="content_main">
                    <div className="content_container">
                    <div className="content_container-img">
                    {sliderImages && sliderImages.length > 0 && (
                    <SimpleImageSlider width={500} height={500} images={sliderImages} showNavs={true}/>)}
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
        )}
        </>
    )
}

export default Product_Details;
