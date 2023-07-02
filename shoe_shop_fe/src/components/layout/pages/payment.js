import React from "react";
import './payment.module.scss'

export function payMent() {
    return (
        <div class="content">
            <div class="content_main">
                <h2>SHOES (TQN)</h2>
                <div class="raw">
                    <div class="customer-information">

                        <section class="custom-section">
                            <h4>Thông tin khách hàng</h4>
                            <input class="field-input" type="text" placeholder="Tên của ban" />
                            <input class="field-input" type="email" name="" id="" placeholder="Email" />
                            <input class="field-input" type="number" name="" id="" placeholder="Số điện thoại" />
                            <input class="field-input" type="text" placeholder="Địa chỉ" />

                        </section>
                    </div>

                    <div class="total-information">
                        <section class="total-section">
                            <img src="./img/product1.webp" alt="img" class="img-total" />
                            <div class="place-total">
                                <p class="place-time-total">Giày Thể Thao Nam Biti's Hunter Core Hmd000500REU (Rêu)6</p>
                                <h5 class="place-desc-total">700.000 đ</h5>
                            </div>
                        </section>
                        <div class="total-shadow"></div>
                        <div class="total-table">
                            <table class="total-line-table">
                                <thead>
                                    <tr>
                                        <th scope="col"><span class="visually-hidden">Mô tả</span></th>
                                        <th scope="col"><span class="visually-hidden">Giá</span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="total-line total-line-subtotal">
                                        <td class="total-line-name">Tạm tính</td>
                                        <td class="total-line-price">
                                            <span class="order-summary-emphasis"
                                                data-checkout-subtotal-price-target="38000000">
                                                380,000₫
                                            </span>
                                        </td>
                                    </tr>
                                    <tr class="total-line total-line-shipping">
                                        <td class="total-line-name">Phí vận chuyển</td>
                                        <td class="total-line-price">
                                            <span class="order-summary-emphasis"
                                                data-checkout-total-shipping-target="2000000">-
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot class="total-line-table-footer">
                                    <tr class="total-line">
                                        <td class="total-line-name payment-due-label">
                                            <span class="payment-due-label-total">Tổng tiền</span>
                                        </td>
                                        <td class="total-line-name payment-due">
                                            <span class="payment-due-currency">VND</span>
                                            <span class="payment-due-price" data-checkout-payment-due-target="38000000">
                                                380,000₫
                                            </span>
                                            <span class="checkout_version" data_checkout_version="12">
                                            </span>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="step-footer" id="step-footer-checkout">
                    <a class="step-footer-previous-link" href="/cart">
                        Giỏ hàng
                    </a>
                    <form id="form_next_step" accept-charset="UTF-8" method="post">
                        <input name="utf8" type="hidden" value="✓" />
                        <button type="submit" class="step-footer-continue-btn btn">
                            <span class="btn-content">Tiếp tục</span>
                            <i class="btn-spinner icon icon-button-spinner"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}