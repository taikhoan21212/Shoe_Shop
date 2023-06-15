import './header.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas, faChevronDown, faMobile, faHeart} from '@fortawesome/free-solid-svg-icons';


function header_top(){
    
    return(
        <div>
            <div class="header_top">
                <div class="header_top-left">
                    <div class="header_top-language">
                        <FontAwesomeIcon icon={faEarthAmericas} />
                        VietNam
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    <div class="header_top-unit">VND
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    <div class="header_top-hostline">
                        <FontAwesomeIcon icon={faMobile} />
                        123-456-789
                    </div>
                </div>
                <div class="header_top-right">
                    <div class="header_top-wishlise">
                        <FontAwesomeIcon icon={faHeart} />
                        Yêu thích
                    </div>
                    <div class="header_top-register">Đăng ký</div>
                    <div class="header_top-login">Đăng nhập</div>
                </div>
            </div>
            <div class="center">
                <div class="box-shadow"></div>
            </div>
        </div>
    );
}

export default header_top;