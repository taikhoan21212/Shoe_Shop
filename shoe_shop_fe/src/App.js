import './App.css';
import react from 'react'
import { BrowserRouter , Routes, Route} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/homepage';
import Login from './components/layout/pages/login';

function App() {
    return (
        <BrowserRouter>
        <div className='App'>
            <Routes>
                <Route exact path="/" element={<Homepage/>} />
                <Route path="/Login" element={<Login />} />
            </Routes>
        </div>
        </BrowserRouter>
    );
}

export default App;
