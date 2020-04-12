import React, {Component} from "react";
import placeholder from './images/placeholder.jpg';
import './Shop.css'
class Shop extends Component {
    render () {
        return (
            <div className='shopDiv'>
                <div className='shopSideNav'>
                    <ul>
                        {/* Add code to make the a tags filter the backend results.  Waiting on backend to be built first */}
                        <li><a href='#'>Tops</a></li>
                        <li><a href='#'>Bottoms</a></li>
                        <li><a href='#'>Blazers</a></li>
                        <li><a href='#'>Outerwear</a></li>
                        <li><a href='#'>Sequins</a></li>
                        <li><a href='#'>Accessories</a></li>
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