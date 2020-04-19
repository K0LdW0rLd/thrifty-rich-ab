import React, {Component} from "react";
import placeholder from './images/placeholder.jpg';
import './Shop.css'
class Shop extends Component {
    render () {
        return (
            <div className='shopDiv'>
                <div className='shopSideNav'>
                    {/* Add code to make the a tags filter the backend results.  Waiting on backend to be built first */}
                    <p><a href='#'>Tops</a></p>
                    <p><a href='#'>Bottoms</a></p>
                    <p><a href='#'>Blazers</a></p>
                    <p><a href='#'>Outerwear</a></p>
                    <p><a href='#'>Sequins</a></p>
                    <p><a href='#'>Accessories</a></p>
                    <p><a href='#'>Shoes</a></p>
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