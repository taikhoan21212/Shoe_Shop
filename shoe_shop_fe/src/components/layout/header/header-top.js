import './header.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas, faChevronDown, faMobile, faHeart} from '@fortawesome/free-solid-svg-icons';


function header_top(){
    
    return(
        <div>
            <div className="header_top">
                <div className="header_top-left">
                    <div className="header_top-language">
                        <FontAwesomeIcon icon={faEarthAmericas} />
                        VietNam
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    <div className="header_top-unit">VND
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    <div className="header_top-hostline">
                        <FontAwesomeIcon icon={faMobile} />
                        123-456-789
                    </div>
                </div>
                <div className="header_top-right">
                    <div className="header_top-wishlise">
                        <FontAwesomeIcon icon={faHeart} />
                        Yêu thích
                    </div>
                    <div className="header_top-register">Đăng ký</div>
                    <div className="header_top-login"><Link to={"/Login"}>Đăng nhập</Link></div>
                    
                </div>
            </div>
            <div className="center">
                <div className="box-shadow"></div>
            </div>
        </div>
    );
}

export default header_top;