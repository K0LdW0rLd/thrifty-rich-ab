import React, {Component} from "react";
import './Personal.css';


class Personal extends Component {
    render () {
        return (
            <div className= 'container personalDiv'>
                <div className= 'container personalDiv'>
                    <p>Thrifty Rich is here to serve you with all your thrift needs; therefore, we are offering additional services. Please see both options below and contact me should you be interested.</p>
                    <div className='container personalOptions'>
                        <div className='container'>
                            <h3>I will shop with you</h3>
                            <p>The rate is $20. We will meet at a local thrift store(s). I will help you shop/style for one hour. Up to two stores per appt. You will be required to pay $10 to secure your appointment. The remaining amount will be due the day of your appointment.</p> <p>-Should you need to cancel your appointment, the deposit is non-refundable. Please try to notify me asap of your cancellation.</p>
                            {/* <button>Shop With You</button> */}
                        </div>
                        <div className='container'>
                            <h3>I will shop for you</h3>
                            <p>The rate is $30 plus your purchase amount. The full payment is due up front. You will be required to provide me the amount of money you'd like me to spend. I will get as close to that amount as possible without going over. I will need 5-7 days to complete your order; but if you need sooner please let me know. This option includes unlimited thrift stores until I fulfill your order.</p>
                            {/* <button>Shop For You</button> */}
                        </div>
                    </div>
                </div>
                <div className='container personalBottom'>
                    <p>Payment Options: 
                        <ul className='personalList'>
                            <li>Cash app: $AABrinkley</li>
                            <li>PayPal: PayPal.Me/thriftyrich</li>
                            <li>*Credit cards are accepted through my square reader device.</li>
                        </ul>
                    </p>
                </div>
            </div>
        )
    }
};

export default Personal;