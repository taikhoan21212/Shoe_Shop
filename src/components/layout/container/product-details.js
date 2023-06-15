import React from 'react'
import './product.css'
import product1 from '../img/product1.webp'


export const productDetails = () => {
    return (
        <div className='main'>
            <div class="content">
                <div class="content_main">
                    <div class="content_container">
                        <div class="content_container-img">
                            <img src='./img/product1.webp' alt="" class="content-product-img" />
                        </div>

                        <div class="content_container-information">
                            <div class="content_container-body">
                                <h3 class="place-time">Giày Thể Thao Nam Biti's Hunter Core Hmd000500REU (Rêu)6</h3>
                                <h4 class="place-desc">700.000 đ</h4>
                                <p>Thương hiệu: Biti's</p>
                                <p>Tình trạng: New</p>
                                <p>Giao hàng và thanh toán:
                                    Giao hàng toàn quốc và thanh toán khi nhận hàng. Bạn có thể kiểm tra sản phẩm.</p>
                                <p>Tặng hộp giày thay thế.</p>
                                <button class="btn-product s-col-full js-buy-ticket">MUA NGAY</button>
                            </div>
                        </div>
                    </div>

                    <div class="content_container-details">
                        <h3>Mô tả sản phẩm</h3>
                        <p>Quá trình sản xuất mỗi đôi giày luôn dư ra lượng vật tư nhất định và không thể tiếp tục được sử
                            dụng. Với tâm thế “còn gì tận dụng nấy”, chúng mình nỗ lực góp nhặt những mảnh vật tư bị lãng
                            quên và mang lại một sứ mệnh mới cho chúng trong một hình hài hoàn chỉnh hơn.</p>
                            <p>Biti's tự hào mang đến bộ sưu tập “tái sử dụng" đầu tiên – BST “Còn-Gì-Dùng-Đó” những đôi giày
                                được tạo nên từ những mảnh ghép ngẫu nhiên, có tỷ lệ tái sử dụng lên đến 60% cùng bộ đế được sử
                                dụng công thức tái chế phế cao su. Những thay đổi nhỏ bé mà bạn sắp trải nghiệm sẽ là điểm khởi
                                đầu của Biti’s trên con đường nỗ lực theo đuổi kỷ nguyên Xanh với 3 trụ cột Products - People -
                                Planet.</p>
                            <p> Cùng Biti’s Hunter góp một bước nhỏ cùng bạn in “dấu chân xanh” cho Trái Đất.
                                Thiết kế mạnh mẽ, cá tính với phối màu monotone không hề đơn điệu. Tiếp tục nâng tầm phong cách
                                thời trang & đồng hành cùng bạn in “dấu chân xanh”.</p>
                            <p>+ Vật tư da, si, thun, lưới .... được tái sử dụng với tỷ lệ lên đến 60% .</p>
                            <p>+ Đế LiteFlex 2.0 với phế cao su tái chế</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
