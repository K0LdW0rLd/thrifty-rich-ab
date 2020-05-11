import React, {Component} from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab, fas, far)

class Footer extends Component {
    constructor(props) {
        super(props);
        this.returnClick = this.returnClick.bind(this);
        this.disclaimerClick = this.disclaimerClick.bind(this);
        this.shippingClick = this.shippingClick.bind(this);
        this.contactClick = this.contactClick.bind(this);
    }
    returnClick() {
        alert('Thrifty Rich features vintage, thrifted, gently worn, and some new items; therefore, ALL SALES ARE FINAL. NO REFUNDS OR EXCHANGES.');
    }
    disclaimerClick() {
        alert('Majority of the items at Thrifty Rich are handpicked from thrift stores; therefore, some items are subject to have stains, marks, or imperfections. If this applies, it will be indicated in the description of that item. In addition, a 10% discount will be applied to ONLY that item at checkout.');
    }
    shippingClick() {
        alert('Please allow 2-3 business days for items to be shipped. Any purchases made on weekends will ship out the next available business day. We ship domestic and international using USPS Priority Mail. You will receive a shipping notification via email with tracking information once your order is processed. *If you need faster shipping or have any additional shipping questions, please email us at thriftyrich757@gmail.com.');
    }
    contactClick() {
        alert('Insert Contact information');
    }
    render() {
        return(
            <footer className='footer mt-auto py-3'>
                <div className='container footerLink'>
                    <a className='text-muted pointer' onClick={this.returnClick}><span>~RETURN POLICY:</span></a>
                    <a className='text-muted pointer' onClick={this.disclaimerClick}><span>~DISCLAIMER:</span></a>
                    <a className='text-muted pointer' onClick={this.shippingClick}><span>~SHIPPING:</span></a>
                    <a className='text-muted pointer' onClick={this.contactClick}><span>~CONTACT:</span></a>
                </div>
                <div className='container footerLink'>
                    <span><FontAwesomeIcon icon={['far', 'copyright']} size="1x" />'2020 Thrifty Rich, All Rights Reserved'</span>
                </div>
            </footer>
        )
    }
}

export default Footer;