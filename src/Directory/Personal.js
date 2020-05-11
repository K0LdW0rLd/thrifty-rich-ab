import React, {Component} from "react";
import './Personal.css';


class Personal extends Component {
    render () {
        return (
            <div className= 'container personalDiv personalBackground'>
                <div className= 'container personalDiv'>
                    <div className='container personalOptionSide'>
                        <p>Thrifty Rich is here to serve you with all your thrift needs; therefore, we are offering additional services. Please see both options below and fill out application form with advanced partial payment to set up an appointment time. Should you have any questions please feel free to contact me. </p>
                        <a href='https://forms.gle/3e4Gv6gc7nXAydQB9' target= '_blank'>Application Form</a>
                    </div>
                    <div className='container personalOptions'>
                        <div className='container personalOptionSide'>
                            <h3>I will shop with you</h3>
                            <p>The rate is $20. We will meet at a local thrift store(s). I will help you shop/style for one hour. Up to two stores per appt. You will be required to pay $10 to secure your appointment. The remaining amount will be due the day of your appointment.</p> <p>-Should you need to cancel your appointment, the deposit is non-refundable. Please try to notify me asap of your cancellation.</p>
                        </div>
                        <div className='container personalOptionSide'>
                            <h3>I will shop for you</h3>
                            <p>The rate is $30 plus your purchase amount. The full payment is due up front. You will be required to provide me the amount of money you'd like me to spend. I will get as close to that amount as possible without going over. I will need 5-7 days to complete your order; but if you need sooner please let me know. This option includes unlimited thrift stores until I fulfill your order.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Personal;