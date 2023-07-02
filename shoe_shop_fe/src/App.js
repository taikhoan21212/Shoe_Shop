import './App.css';
import react from 'react'
import { BrowserRouter , Routes, Route} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/homepage';
import Login from './components/layout/pages/login';
import HeaderDown from './components/layout/header/header-down';
import HeaderTop from './components/layout/header/header-top';
import Footer from './components/layout/footer/footer';

function App() {
    return (
        <BrowserRouter>
        <div className='App'>
            <div className="header">
                <HeaderTop />
                <HeaderDown />
            </div>
            <div className='main'>
                <Routes>
                    <Route exact path="/" element={<Homepage/>} />
                    <Route path="/Login" element={<Login />} />
                </Routes>
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
