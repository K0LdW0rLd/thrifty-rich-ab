import React, {Component} from "react";
import './Home.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button'

class Home extends Component {
    render () {
        return (
            <div className='container welcome'>
                    <div className='homeBase'>
                        <h1>Welcome</h1>
                        <button type="button" class="btn btn-outline-warning">
                        <Link class="nav-link" to="/about">About</Link></button>
                        <button type="button" class="btn btn-outline-warning">
                        <Link class="nav-link" to='/shop'>Shop</Link></button>
                    </div>
            </div>
        )
    }
};

export default Home;