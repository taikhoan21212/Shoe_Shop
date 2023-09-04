import React from 'react'
import "./manageOrder.css"
import { format } from 'date-fns';
import viLocale from 'date-fns/locale/vi';
function OrderDetail({order, cart}) {
    const totalQuantity = cart ? cart.products.reduce((accumulator, product) => accumulator + product.quantity, 0) : 0;
    const formattedDate = (date) => {
        return format(new Date(date), 'do MMMM yyyy', { locale: viLocale });
      };
  return (
    <div className="container-order-detail">
        <div className="customer-detail" width="45%" style={{ textAlign: 'left' , marginTop: '10px'}}> 
            Khách hàng : {order.shipmentdetails.name} {order.shipmentdetails.surname}<br /> 
            Số điện thoại : {order.shipmentdetails.phone}<br /> 
            Email : {order.shipmentdetails.email}<br /> 
            Địa chỉ giao hàng: {order.shipmentdetails.address}<br /> 
        </div>

      <table className="order-detail-table" width="100%" style={{ marginTop: '20px'}} >
    <thead>
      <tr>
        <th style={{ textAlign: 'left' }}>Sản phẩm</th>
        <th>Màu</th>
        <th>Kích cỡ</th>
        <th>Số lượng</th>
        <th>Giá trị</th>
      </tr>
    </thead>
    {cart.products && cart.products.map((product, index) => {
  return (
    <tbody key={index}>
      <tr>
        <td style={{ textAlign: 'left' }}>{product.title}</td>
        <td>{product.color}</td>
        <td>{product.size}</td>
        <td>{product.quantity}</td>
        <td>{(product.price * 0.92).toLocaleString()}đ</td>
      </tr>
    </tbody>
  );
})}
  </table>
  <div width="45%" style={{ textAlign: 'center' , marginTop: '10px'}}>
            Tổng kiện hàng  : <strong>{totalQuantity}</strong><br />
            Giá trị đơn hàng    : {order.amount.toLocaleString()} đ<br />
            Ngày tạo đơn hàng   : {formattedDate(order.createdAt)}<br />
        </div>

    </div>
  )
}

export default OrderDetail
