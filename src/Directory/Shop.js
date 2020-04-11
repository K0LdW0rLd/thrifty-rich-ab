import React, {Component} from "react";
import placeholder from './images/placeholder.jpg';
import './Shop.css'
class Shop extends Component {
    render () {
        return (
            <div className='shopDiv'>
                <div className='shopSideNav'>
                    <ul>
                        <li>Tops</li>
                        <li>Bottoms</li>
                        <li>Blazers</li>
                        <li>Outerwear</li>
                        <li>Sequins</li>
                        <li>Accessories</li>
                    </ul>
                </div>
                <div className='container shopContent'>
                    <div class="row row-cols-1 row-cols-md-3">
                        <div class="col mb-4">
                            <div class="card h-100 w-100">
                            <img className='shopImage' src={placeholder}  class="card-img-top" alt="placeholder"/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Example</p>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-4">
                            <div class="card h-100 w-100">
                            <img className='shopImage' src={placeholder}  class="card-img-top" alt="placeholder"/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Example</p>
                            </div>
                            </div>
                        </div>
                        <div class="col mb-4">
                            <div class="card h-100 w-100" >
                            <img className='shopImage' src={placeholder}  class="card-img-top" alt="placeholder"/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Example.</p>
                            </div>
                            </div>
                        </div>
                        <div class="col mb-4">
                            <div class="card h-100 w-100">
                            <img className='shopImage' src={placeholder}  class="card-img-top" alt="placeholder"/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Example</p>
                            </div>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        )
    }
};

export default Shop;