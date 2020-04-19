import React, {Component} from "react";
import placeholder from './images/placeholder.jpg';
import './LBook.css';

class LBook extends Component {
    render () {
        return (
            <div className='lBookDiv'>
            <div className='container lBookContent'>
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

export default LBook;