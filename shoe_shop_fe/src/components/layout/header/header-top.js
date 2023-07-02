import './header.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas, faChevronDown, faMobile, faHeart} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";

function Header_top(){
    const user = useSelector((state)=> state.auth.login.currentUser);
    
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
                    {user? (
                        <>
                        <p className="header_top-hello">Hi, <span> {user.username}  </span> </p>
                        { user.isAdmin? (<> <Link to="/PageAdmin" className="header_top-admin"> <span> Admin page </span> </Link> </>):(<></>)}
                                    <Link to="/logout" className="navbar-logout" > Log out</Link>
        
        </>
      ) : (<>
                    <div className="header_top-register">Đăng ký</div>
                    <div className="header_top-login"><Link to={"/Login"}>Đăng nhập</Link></div></>)}
                </div>
            </div>
            <div className="center">
                <div className="box-shadow"></div>
            </div>
        </div>
    );
}

export default Header_top;