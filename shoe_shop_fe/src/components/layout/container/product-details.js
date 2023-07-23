import './product.css'
import React, {useState, useEffect ,useContext} from "react";
import axios from 'axios';
import {useParams } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
import {CartContext} from "../pages/cart/CartContext";


function Product_Details() {
    const { id } = useParams();
    const [productDetail, setProductDetail] = useState(null);
    const [sliderImages, setSliderImages] = useState(null);
    const [selectSwatch, setSelectwatch] = useState(null);
    const [rem, setRem] = useState(null);
    const [indexColor, setIndexColor] = useState("0");
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    


    useEffect(() => {
          axios
            .get(`${process.env.REACT_APP_API_URL}products/${id}`)
            .then((res) => {
              setProductDetail(res.data);
              setSliderImages(res.data.img);
              setSelectwatch(res.data.size_color_remaining);
            })
            .catch(console.log);
        
      }, [id]);


    //   console.log(productDetail);
      
    //   console.log(sliderImages);
    //   console.log(selectSwatch);
    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    function QuantityBtn({productInfo}) {

        const {cartItems, setCartItems} = useContext(CartContext)
    
        let productIndexInCart = cartItems.findIndex((element)=>{
            return element.id === productInfo.id
        })

        let [numInCart,setNumInCart] = useState(
            (productIndexInCart===-1) ? 0 : cartItems[productIndexInCart].quantity
        )
    
        
        const handleAdd = () => {
            const newItem = {
              id: productDetail._id,
              title: productDetail.title,
              price: productDetail.price,
              img: productDetail.img[0],
              color: selectedColor,
              size: selectedSize,
              quantity: 1,
            };
          
            const existingItemIndex = cartItems.findIndex(
              (item) =>
                item.id === productDetail._id &&
                item.color === selectedColor &&
                item.size === selectedSize
            );
          
            if (existingItemIndex !== -1) {
              const updatedCartItems = cartItems.map((item, index) => {
                if (index === existingItemIndex) {
                  return {
                    ...item,
                    quantity: item.quantity + 1,
                  };
                }
                return item;
              });
              setCartItems(updatedCartItems);
            } else {
              setCartItems([newItem, ...cartItems]);
            }
          };
    

        return (
                    <button className="btn-product s-col-full js-buy-ticket" onClick={handleAdd}>Thêm vào giỏ</button>
        )
    }

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
                                <h4 className="place-desc" >{productDetail.price.toLocaleString()} đ</h4>
                                <p>Thương hiệu: {productDetail.brand}</p>
                                <p>Tình trạng: New</p>
                                <p>Giao hàng và thanh toán:
                                    Giao hàng toàn quốc và thanh toán khi nhận hàng. Bạn có thể kiểm tra sản phẩm.</p>
                                <p>Tặng hộp giày thay thế.</p>
                                <div className="select-swatch">
                                    <p>Tình trạng : {rem}</p>
                                    <div className="select-swatch-color">
                                    <div className="select-swatch-color-item">
                                        {selectSwatch && selectSwatch.length >0 && selectSwatch.map((item, index) => {
                                            return (<>
                                                    <input type="radio" id={"color"+index} name="color" value={item._id} checked={index === indexColor} onChange={(e) => {setIndexColor(index);setSelectedColor(item.color)}}/>
                                                    <label htmlFor={"color"+index}>{item.color}</label>
                                            </>);
                                        })}

                                        </div>  
                                        <div className="select-swatch-color-size-item">
                                            <div className="select-swatch-color-size-item" >
                                                    {selectSwatch && selectSwatch.length >0 && selectSwatch[indexColor].size_remaining.map((item, index) => {
                                                        return (<>
                                                              {item.remaining > 0 ? (
                                                                <>
                                                                  <input key={index} type="radio" id={"size" + item.size} name="size" value={item.size} onChange={(e) => {setSelectedSize(item.size); setRem(item.remaining)}}/>
                                                                  <label htmlFor={"size" + item.size}>{item.size}</label>
                                                                </>
                                                            ) : (
                                                                <label className="disabled-label" htmlFor={"size" + item.size}>
                                                                  {item.size}
                                                                </label>
                                                            )}</>
                                                        );
                                                    })}
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <QuantityBtn productInfo={productDetail}/>
                                <button className="btn-product s-col-full js-buy-ticket" onClick={handleSubmit}>MUA NGAY</button>
                                
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
