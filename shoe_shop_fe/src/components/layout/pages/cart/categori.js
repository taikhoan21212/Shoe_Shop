import './categori.css';
import {Link} from 'react-router-dom'
import {CartContext}  from "./CartContext"
import React,{ useContext} from "react"
import axios from 'axios';

function Categori() {

    const { cartItems, setCartItems } = useContext(CartContext);
    const cartId = sessionStorage.getItem("cartId");

    const handleRedirect = () => {
        // Navigate to the /Cart page with the cartId passed as a URL parameter
        window.location.href = `/CreateOrder/${cartId}`;
      };

    const cartEmpty = cartItems.length<=0 ? true : false;

    
    const grandTotal = cartItems.reduce((total, product)=>{
        return total += product.price*product.quantity
    },0)
    const freeShippingPrice = 800000

    const handleAdd = (index) => {
        const updatedCartItems = [...cartItems];
        const item = updatedCartItems[index];
        item.quantity++;

        setCartItems(updatedCartItems);
      };

      const handleSubtract =(index) =>{
        const updatedCartItems = [...cartItems]; 
        const item = updatedCartItems[index]; 

        if(item.quantity === 1){
            let newCartArray = [...cartItems]
            newCartArray.splice(index,1)
            setCartItems(newCartArray)
        }else{ 
            const updatedCartItems = [...cartItems];
            const item = updatedCartItems[index];
            item.quantity--;
            setCartItems(updatedCartItems);}
        }


    


    return (
            <>
            <h1>Giỏ Hàng</h1>

            {
                cartEmpty && 
                <div>
                    <div className="nothingInCart">Giỏ hàng không có sản phẩm<br/><br/>
                    <Link to="/">Xem sản phẩm</Link></div> :
                </div>
            }

            {
                !cartEmpty &&
                <div className="container">
                    <div className="cartSection">
                        <table className="checkoutTable" id="checkoutTable">
                            <tbody>
                                {
                                    cartItems.map((product,index)=>(
                                        <tr key={product.productId}>
                                            <td>
                                                <Link to={"/products/" + product.productId}>
                                                  <img src={product.img} alt={product.title} value={product.productId}/>
                                                </Link>
                                            </td>
                                            <td>
                                                <p>Sản Phẩm : {product.title}</p>
                                                <p>Giá : {product.price.toLocaleString()} đ</p>
                                                <p>Màu : {product.color}</p>
                                                <p>Kích cỡ : {product.size}</p>
                                            </td>
                                            <td>
                                            <div className='addToCart'>
                                                <span className="subtractBtn" onClick={()=>handleSubtract(index)}>-</span>
                                                {product.quantity} Kiện
                                                <span className="addBtn" onClick={()=>handleAdd(index)}>+</span>
                                            </div>
                                            </td>
                                            <td>
                                                <div className="productSubTotal">
                                                {(product.price * product.quantity).toLocaleString()}đ
                                                </div>
                                            </td>
                                        </tr>

                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="checkoutSection">
                        <div>Tổng tiền</div>
                        <div className="grandTotal">{grandTotal.toLocaleString()} đ</div>
                        {
                            grandTotal >= freeShippingPrice ? 
                            <div className="freeShipping">✔️Giao hàng miễn phí</div> :
                            <div className="noShipping">Đơn hàng từ {freeShippingPrice.toLocaleString()}đ sẽ được giao hàng miễn phí</div>
                        }
                        <Link to="/CreateOrder" onClick={handleRedirect}>
                        <button>Đặt hàng</button></Link>
                    </div>
                </div> 
            }

        </>
    )
}

export default Categori;