
import React, { useState, useEffect} from 'react';
import "./customerorder.css";
import "./manageOrder.css"
import { useSelector } from 'react-redux';
import axios from 'axios';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronDown , faChevronLeft, faCheckCircle, faExclamationCircle} from '@fortawesome/free-solid-svg-icons';
import {
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
    MDBCardHeader,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBProgress,
    MDBProgressBar,
    MDBRow,
    MDBTypography,
  } from "mdb-react-ui-kit";

export default function ManageOrder() {
    const user = useSelector((state) => state.auth.login.currentUser);
    const [orders, setOrders] = useState([]);
    const [carts, setCarts] = useState([]);
    const [openDetail, setOpenDetail] = useState(null);
  
  
    useEffect(() => {
        axios
          .get(`${process.env.REACT_APP_API_URL}order/`)
          .then((res) => {
            const orders = res.data;
            setOrders(orders);
          })
          .catch((error) => {
            console.log(error);
          });
          axios
          .get(`${process.env.REACT_APP_API_URL}cart/`)
          .then((res) => {
            const carts = res.data;
            setCarts(carts);
          })
          .catch((error) => {
            console.log(error);
          });  
    }, []);
  
  
  
    const getOrderStatusWidth = (status) => {
      if (status === "pending") {
        return 25;
      } else if (status === "delivery") {
        return 55;
      } else if (status === "completed") {
        return 100;
      }
    };
      const [selectedBtn, setSelectedBtn] = useState("1");
      const handleBtn = (value) => {
        setSelectedBtn(value);
      }



  return (
    <div className='manage-order'>
        <div className='manage-order-section'>
        <button type='button' value='1' className={`btn manage-btn ${selectedBtn === '1' ? 'btn-primary' : 'tn-light'}`} onClick={(e) => handleBtn(e.target.value)}>Tất cả</button>
            <button type='button' value='2' className={`btn manage-btn ${selectedBtn === '2' ? 'btn-primary' : 'tn-light'}`} onClick={(e) => handleBtn(e.target.value)}>Đợi xác nhận</button>
            <button type='button' value='3' className={`btn manage-btn ${selectedBtn === '3' ? 'btn-primary' : 'tn-light'}`} onClick={(e) => handleBtn(e.target.value)}>Đang giao</button>
            <button type='button' value='4' className={`btn manage-btn ${selectedBtn === '4' ? 'btn-primary' : 'tn-light'}`} onClick={(e) => handleBtn(e.target.value)}>Đã hoàn thành</button>
        </div>
        <div className='manage-order-table'>
            <table className="table table-striped order-table">
            <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Ngày đặt hàng</th>
                  <th scope="col">Mã đơn hàng</th>
                  <th scope="col">Số lượng đặt</th>
                  <th scope="col">Thanh toán</th>
                  <th scope="col">...</th>
                  </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => {
                        const cart = carts.find((cart) => cart._id === order.cartId);
                        const totalQuantity = cart ? cart.products.reduce((accumulator, product) => accumulator + product.quantity, 0) : 0;       
                        const Orderstatus = order.status;
                        const widthStatus = getOrderStatusWidth(Orderstatus);
      
                        const colorStop = Math.round((widthStatus / 100) * 100);
      
                        const progressBarStyle = {
                          borderRadius: "16px",
                          background: `linear-gradient(to right, #8ef5ca ${colorStop}%, #017a48)`,
                        };
    
                    return(<>

                        <tr key={index}>
                          <th scope="row">{index}</th>
                          <td>{new Date(order.createdAt).toLocaleDateString()} {new Date(order.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</td>
                          <td>{order._id}</td>
                          <td>1</td>
                          <td>COD - {order.amount.toLocaleString()} đ</td>
                          <td>{openDetail === order._id ?(<FontAwesomeIcon icon={faChevronLeft} onClick={() => setOpenDetail(null)}/>) :(<FontAwesomeIcon icon={faChevronDown} onClick={() => setOpenDetail(order._id)}/>)}</td>
                        </tr>{openDetail === order._id && 
                                <div className='order-detail'>
                                    <>
        <MDBContainer className="py-5 h-100">

          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="10" xl="8">
            {cart && (<>
              <MDBCard style={{ borderRadius: "10px", marginBottom: "20px"  }}>
                  <MDBCardBody className="p-4">
                    <button type='button' onClick={() => setOpenDetail(null)} className='btn-close'></button>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      {order.status === "completed" ? (
                        <div className="alert alert-success mb-0" role="alert" style={{ display: "flex", alignItems: "center" }}>
                        <FontAwesomeIcon icon={faCheckCircle} style={{ fontSize: "2rem", marginRight: "1rem" }} />
                        <div>
                          <p style={{ marginBottom: "0" }}>ĐÃ HOÀN THÀNH: {new Date(order.updatedAt).toLocaleDateString()} {new Date(order.updatedAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}.</p>
                        </div>
                      </div>
                        ):(<p className="lead fw-normal mb-0" style={{ color: "#a8729a" }}>Đơn hàng chưa hoàn thành</p>)}
                      {/* <div><FontAwesomeIcon icon={faExclamationCircle} /></div> */}
                      <p className="small text-muted mb-0">
                        Người nhận: {order.shipmentdetails.surname} {order.shipmentdetails.name} <br />
                        Điện thoại: {order.shipmentdetails.phone} <br />
                        Địa chỉ nhận hàng : {order.shipmentdetails.address} <br />
                      </p>
                    </div>
                    <MDBCard className="shadow-0 border mb-4">
                      {cart && cart.products.map((item, index) => (
                        <MDBCardBody key={index}>
                          <MDBRow>
                            <MDBCol md="2">
                              <MDBCardImage src={item.img} fluid alt={item.brand} />
                            </MDBCol>
                            <MDBCol md="2" className="text-center d-flex justify-content-center align-items-center">
                              <p className="text-muted mb-0">{item.title}</p>
                            </MDBCol>
                            <MDBCol md="2" className="text-center d-flex justify-content-center align-items-center">
                              <p className="text-muted mb-0 small">Màu: {item.color}</p>
                            </MDBCol>
                            <MDBCol md="2" className="text-center d-flex justify-content-center align-items-center">
                              <p className="text-muted mb-0 small">Size: {item.size}</p>
                            </MDBCol>
                            <MDBCol md="2" className="text-center d-flex justify-content-center align-items-center">
                              <p className="text-muted mb-0 small">
                                {item.gender === "F" || item.gender === "Female" || item.gender === "women" || item.gender === "Woman" ? (
                                  "Giày: Nữ"
                                ) : item.gender === "M" || item.gender === "Male" || item.gender === "man" || item.gender === "men" ? (
                                  "Giày: Nam"
                                ) : (
                                  "Giày: Unsex"
                                )}
                              </p>
                            </MDBCol>
                            <MDBCol md="2" className="text-center d-flex justify-content-center align-items-center">
                              <p className="text-muted mb-0 small">Qty: {item.quantity}</p>
                            </MDBCol>
                            <MDBCol md="2" className="text-center d-flex justify-content-center align-items-center">
                              <p className="text-muted mb-0 small">{item.price.toLocaleString()} đ</p>
                            </MDBCol>
                          </MDBRow>
                          <hr className="mb-4" style={{ backgroundColor: "#e0e0e0", opacity: 1 }} />
                        </MDBCardBody>
                      ))}
                      <MDBRow className="align-items-center">
                          <MDBCol md="2">
                            <p className="text-muted mb-0 small">Tình trạng:</p>
                          </MDBCol>

                          <MDBCol md="10">
                            <MDBProgress
                              style={{ height: "6px", borderRadius: "16px" }}
                            >
                              <MDBProgressBar
                                style={progressBarStyle}
                                width={widthStatus}
                                valuemin={0}
                                valuemax={100}
                              />
                            </MDBProgress>
                            <div className="d-flex justify-content-around mb-1">
                              <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                Đang xử lý
                              </p>
                              <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                Đang giao hàng
                              </p>
                              <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                Đơn hàng đã hòa thành
                              </p>
                            </div>
                          </MDBCol>
                        </MDBRow>
                    </MDBCard>
                    <div className="d-flex justify-content-between pt-2">
                      <p className="fw-bold mb-0">Thông tin đơn hàng</p>
                      <p className="text-muted mb-0">
                        <span className="fw-bold me-1">Giá trị hàng:</span> {(order.amount * 0.92).toLocaleString()} đ
                      </p>
                    </div>
                    <div className="d-flex justify-content-between pt-2">
                      <p className="text-muted mb-0">Số hóa đơn : {order._id} </p>
                      <p className="text-muted mb-0">
                      <span className="fw-bold me-5">Số kiện hàng: </span>{totalQuantity}  Kiện
                    </p>
                    </div>
  
                    <div className="d-flex justify-content-between">
                      <p className="text-muted mb-0">
                      Ngày đặt hàng: {new Date(order.createdAt).toLocaleDateString()} {new Date(order.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                      </p>
                      <p className="text-muted mb-0">
                        <span className="fw-bold me-3">Thuế 8%: </span> {(order.amount * 0.08).toLocaleString()} đ
                      </p>
                    </div>
  
                    <div className="d-flex justify-content-between">
                      <p className="text-muted mb-0">
                        Phương thức thanh toán : Thanh toán khi nhận hàng
                      </p>
                      <p className="text-muted mb-0">
                        <span className="fw-bold me-4">Giao hàng: </span>{" "}
                        Miễn phí
                      </p>
                    </div>
                    <div className="d-flex justify-content-between mb-0 mt-1 exclamation">
                    <p className="text-muted" style={{ fontSize: "1.1rem"}}>
                    <FontAwesomeIcon icon={faExclamationCircle} className="exclamation-icon"/> Nếu có vấn đề về đơn hàng vui lòng liên hệ ngay với chúng tôi:{" "}
  <a href="mailto:support@tqn.com">support@tqn.com</a>
                    </p>
                  </div>
                  <MDBCardFooter
                    className="border-0 px-4 py-5"
                    style={{
                      backgroundColor: "#8a8888",
                      borderBottomLeftRadius: "10px",
                      borderBottomRightRadius: "10px",
                    }}
                  >
                    <MDBTypography
                      tag="h4"
                      className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0"
                    >
                        Thành tiền: <span className="h2 mb-0 ms-2">{(order.amount || 0).toLocaleString()} đ</span>
                    </MDBTypography>
                  </MDBCardFooter>
                  </MDBCardBody>
                </MDBCard></>)}
              </MDBCol>
            </MDBRow>
          </MDBContainer> 










                                    </></div>}
                            
                            </>)})}
                </tbody>
            </table>
        </div>
    </div>
  )
}
