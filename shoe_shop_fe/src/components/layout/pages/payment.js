import React,{ useContext} from "react";
import { Link } from 'react-router-dom';
import './payment.css'
import {CartContext}  from "./cart/CartContext"
import {MDBCheckbox,MDBBtn, MDBCard, MDBCardBody, MDBCardFooter, MDBCardHeader, MDBCardImage, MDBCol, MDBContainer, MDBInput, MDBListGroup, MDBListGroupItem, MDBRow, MDBTextArea, MDBTypography } from 'mdb-react-ui-kit';

export default function PayMent() {
    const { cartItems } = useContext(CartContext);
    const grandTotal = cartItems.reduce((total, product)=>{
        return total += product.price*product.quantity
    },0)
    //const freeShippingPrice = 800000;
    const cartN = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <MDBContainer className="my-3 py-3" style={{maxWidth: '1300px'}}>
        <section>
          <MDBRow>
            <MDBCol md="8" className="mb-4">
              <MDBCard className="mb-4 border-2">
                <MDBCardHeader className="py-3">
                  <MDBTypography tag="h5" className="mb-0 text-font text-uppercase">Thông tin giao hàng</MDBTypography>
                </MDBCardHeader>
                <MDBCardBody>
                <form>
                <MDBRow>
                  <MDBCol>
                    <MDBInput label='Họ' type='text' />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput label='Tên' type='text' />
                  </MDBCol>
                </MDBRow><br />
                <MDBInput label='Địa chỉ' type='text'/><br />
                <MDBInput label='Email' type='text'/><br />
                <MDBInput label='Số điện thoại' type='text'/><br />
                <MDBTextArea label='Thông tin thêm' rows={4}/><br />

                <div className="d-flex justify-content-center">
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Lưu thông tin' defaultChecked />
                </div>
              </form>
                </MDBCardBody>
              </MDBCard>
              <div className="text-center">
                <MDBBtn className="button-order col-md-10">Đặt hàng</MDBBtn>
              </div>
            </MDBCol>

            <MDBCol md="4" className="mb-4 position-statics ">
              <MDBCard className="mb-4 border-2">
                <MDBCardHeader className="py-3">
                  <MDBTypography tag="h5" className="mb-0 text-font">
                    {cartN} Kiện <Link to="/Cart"  className="float-end mt-1" style={{ fontSize: '13px' }}>Sửa</Link>
                  </MDBTypography>
                </MDBCardHeader>
                {
                                    cartItems.map((product,index)=>(
                <MDBCardBody>
                  <MDBRow key={product.productId} className="border-bottom border-grey">
                    <MDBCol md="4">
                      <MDBCardImage src={product.img}
                        className="rounded-3" style={{ width: '150px'}} alt={product.title} />
                    </MDBCol>
                    <MDBCol md="6" className="ms-3">
                      <span className="mb-0 text-price">{product.price.toLocaleString()} đ</span>
                      <p className="mb-0 text-descriptions">{product.title}</p>
                      <span className="text-descriptions fw-bold">{product.color}</span> <span
                        className="text-descriptions fw-bold">{product.size}</span>
                      <p className="text-descriptions mt-0">
                        Số lượng:<span className="text-descriptions fw-bold">{product.quantity}</span>
                      </p>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>))}
                <MDBCardFooter className="mt-1">
                  <MDBListGroup flush>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0 text-muted">
                    Tổng tiền
                      <span>{grandTotal.toLocaleString()} đ</span>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0 fw-bold text-uppercase">
                    Tổng tiền 
                      <span>{grandTotal.toLocaleString()} đ</span>
                    </MDBListGroupItem>
                  </MDBListGroup>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
  
          </MDBRow>
        </section>
      </MDBContainer>

    )
}