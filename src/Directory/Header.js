import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Header.css'
import logo from "./images/tr-logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import About from './About';
import Shop from './Shop';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab, fas, far)

class Header extends Component {
    render () {
        return (
            <Router>
                <Navbar className='nav-head' collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/"><img src={logo} width= '60' height='60' alt='logo' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Link class="nav-link" to="/">Home<span class="sr-only">(current)</span></Link>
                            <Link class="nav-link" to="/about">About</Link>
                            <Link class="nav-link" to='/shop'>Shop</Link>
                        </Nav>
                        <Nav>
                            <Link class="nav-link" to="#"><FontAwesomeIcon icon={['fab', 'instagram']} size="2x" /></Link>
                            <Link class="nav-link" to="#"><FontAwesomeIcon icon={['fab', 'twitter']} size="2x" /></Link>                    
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Route path='/about' component={About}/>
                <Route path='/shop' component={Shop}/>
            </Router>
        )
    };
};

export default Header;