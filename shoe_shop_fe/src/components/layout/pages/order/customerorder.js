import React,{useState} from 'react'
import "./customerorder.css"
import { useSelector } from 'react-redux';
import axios from 'axios';
 

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
  
  export default function Customerorder() {
    const user = useSelector((state)=> state.auth.login.currentUser);
    //const [orders, setOrders] = useState([]);
    const [order, setOrder] = useState([]);
    const [total, setTotal] = useState(0);
    const [vAT, setVAT] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    
    const [productLsit, setproductLsit] = useState([]);

    // useEffect(() => {
 
        if(user){
            const userID = user._id;
debugger
        axios
        .get(`${process.env.REACT_APP_API_URL}order/find/${userID}`)
        .then((res) => {
           const order = res.data[0];
           setproductLsit(order ? order.products : []);
    setTotalQuantity(productLsit && productLsit.length > 0
  ? productLsit.reduce((accumulator, product) => accumulator + product.quantity, 0)
  : 0);
    setVAT(order.amount * 0.08);
    setTotal(order.amount * 0.92);
            setOrder(order)
            //setOrders(res.data)
                })
                .catch((error) => {
                  console.log(error);
                });
            }
    // }, [user]);

 
    const getOrderStatusWidth = (status) => {
      if (status === "pending") {
        return 20;
      } else if (status === "pending2") {
        return 70;
      } else if (status === "pending3") {
        return 100;
      }
    };
    
    const Orderstatus = order.status;
    const widthStatus = getOrderStatusWidth(Orderstatus);

    const colorStop = Math.round((widthStatus / 100) * 100);

const progressBarStyle = {
  borderRadius: "16px",
  background: `linear-gradient(to right, #8ef5ca ${colorStop}%, #017a48)`,
};


    return (
      <>
        <section
          className="h-100 gradient-custom"
          style={{ backgroundColor: "#eee" }}
        >
          <MDBCardHeader className="px-4 py-5">
            <MDBTypography tag="h5" className="text-muted mb-0">
              Cảm ơn đơn hàng của bạn,{" "}
              <span style={{ color: "#a8729a" }}>{user.username}</span>!
            </MDBTypography>
          </MDBCardHeader>
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol lg="10" xl="8">
                <MDBCard style={{ borderRadius: "10px" }}>

                  {/* {orders.map((order1,index1)=>{ */}
                  <MDBCardBody className="p-4">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <p
                        className="lead fw-normal mb-0"
                        style={{ color: "#a8729a" }}
                      >
                        Receipt
                      </p>
                    </div>                  
                    
                    <MDBCard className="shadow-0 border mb-4">
                      {productLsit.map((item, index) => {
                        return (
                          <>
                      <MDBCardBody key={index}>
                        <MDBRow>
                          <MDBCol md="2">
                            <MDBCardImage
                              src={item.img}
                              fluid
                              alt={item.brand}
                            />
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0">{item.title}</p>
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0 small">Màu: {item.color}</p>
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0 small">Size: {item.size}</p>
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0 small">
                                {item.gender === "F" || item.gender === "Female"|| item.gender === "women" || item.gender === "Woman" ? (
                                "Giày: Nữ"
                            ) : item.gender === "M" || item.gender === "Male" || item.gender === "man" || item.gender === "men" ? (
                                "Giày: Nam"
                            ) : (
                                "Giày: Unsex"
                            )}</p>
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0 small">Qty: {item.quantity}</p>
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0 small">{item.price.toLocaleString()} đ</p>
                          </MDBCol>
                        </MDBRow>
                        <hr
                          className="mb-4"
                          style={{ backgroundColor: "#e0e0e0", opacity: 1 }}
                        />
                        
                      </MDBCardBody>
          
                        </>
                    )})}
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
                                Đơn hành đã hòa thành
                              </p>
                            </div>
                          </MDBCol>
                        </MDBRow>
                    </MDBCard>
                    <div className="d-flex justify-content-between pt-2">
                      <p className="fw-bold mb-0">Thông tin đơn hàng</p>
                      <p className="text-muted mb-0">
                        <span className="fw-bold me-1">Giá trị hàng:</span> {total.toLocaleString()} đ
                      </p>
                    </div>
                    <div className="d-flex justify-content-between pt-2">
                      <p className="text-muted mb-0">Số hóa đơn : {order._id}</p>
                      <p className="text-muted mb-0">
                      <span className="fw-bold me-5">Số kiện hàng: </span> {totalQuantity} Kiện
                    </p>
                    </div>
  
                    <div className="d-flex justify-content-between">
                      <p className="text-muted mb-0">
                      Ngày đặt hàng: {new Date(order.createdAt).toLocaleDateString()}
                      </p>
                      <p className="text-muted mb-0">
                        <span className="fw-bold me-3">Thuế 8%: </span> {vAT.toLocaleString()} đ
                      </p>
                    </div>
  
                    <div className="d-flex justify-content-between mb-5">
                      <p className="text-muted mb-0">
                        Phương thức thanh toán : Thanh toán khi nhận hàng
                      </p>
                      <p className="text-muted mb-0">
                        <span className="fw-bold me-4">Giao hàng: </span>{" "}
                        Miễn phí
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
                      tag="h5"
                      className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0"
                    >
                        Thành tiền: <span className="h2 mb-0 ms-2">{(order.amount || 0).toLocaleString()} đ</span>
                    </MDBTypography>
                  </MDBCardFooter>
                  </MDBCardBody> 
                  {/* })}         */}
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </>
    );
  }