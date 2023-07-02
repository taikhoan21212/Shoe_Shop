import './responsive.css';
import react from 'react'
import HeaderDown from './layout/header/header-down';
import HeaderTop from './layout/header/header-top';
import Slider from './layout/sidebar/slider.js';
import ProductHot from './layout/container/product-hot.js'
import Footer from './layout/footer/footer'


function Homepage() {
    return (
        <div class='main'>
            <div class="header">
                {/* header */}
                <HeaderTop />
                <HeaderDown />
            </div>
            {/* Slider */}
            <Slider />

            {/* Container */}
            <ProductHot />

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Homepage;