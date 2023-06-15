import './App.css';
import './responsive.css';
import react from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HeaderDown from '../src/components/layout/header/header-down';
import HeaderTop from '../src/components/layout/header/header-top';
import Slider from '../src/components/layout/sidebar/slider.js';
import ProductHot from '../src/components/layout/container/product-hot.js'
import Footer from '../src/components/layout/footer/footer'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faFontAwesome);

function App() {
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
            <Footer/>
        </div>
    );
}

export default App;
