import React, { useState } from 'react'
import "./manageOrder.css"
import { format } from 'date-fns';
import viLocale from 'date-fns/locale/vi';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {  faPenToSquare, faPrint } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
function OrderDetail({order, cart}) {
    const totalQuantity = cart ? cart.products.reduce((accumulator, product) => accumulator + product.quantity, 0) : 0;
    const formattedDate = (date) => {
        return format(new Date(date), 'do MMMM yyyy', { locale: viLocale });
      };


        const [showForm, setShowForm] = useState(false);
        const [status, setStatus] = useState('');
        const [orderCode, setOrderCode] = useState('');
      
        const handleIconClick = () => {
          setShowForm(true);
        };
      
        const handleSubmit = () => {
          // Xử lý logic khi submit form
          axios.put(`${process.env.REACT_APP_API_URL}order/${order._id}`, {
            status: status
          }).then((res) => {
            setShowForm(false);
          }).catch((err) => {
            alert("Error");
          })
        };
      
        const handleCancel = () => {
          setShowForm(false);
        };
  return (<div className='order-detail'>
    
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

    <div className='control-order'>
      <button type='button' className='btn btn-control-order' onClick={handleIconClick}><FontAwesomeIcon icon={faPenToSquare} /></button>
      <button type='button' className='btn btn-control-order'><FontAwesomeIcon icon={faPrint} /></button>
    </div>
    {showForm && (
        <div className="order-upload">
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="pending">Đang cho xác nhận</option>
                <option value="delivery">Gửi hàng</option>
                <option value="completed">Đã hoàn thành</option>
                <option value="cancel">Hủy đơn hàng</option>
          </select><br />
           <input type="text" placeholder="Mã đơn hàng" value={orderCode} onChange={(e) => setOrderCode(e.target.value)} required/><br/>
          <button type='submit' className='btn btn-primary' onClick={handleSubmit}>Submit</button>
          <button type='button' className='btn btn-light' onClick={handleCancel}>Cancel</button>
        </div>
      )}
    </div>)
}

export default OrderDetail
