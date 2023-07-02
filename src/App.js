import './App.css';
import react from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/homepage';

function App() {
    return (
        <div className='main'>
        <Homepage/>
        </div>
    );
}

export default App;
