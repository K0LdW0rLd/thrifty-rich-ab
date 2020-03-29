import React, {Component} from "react";
import './About.css';
import photo1 from './images/photo1.jpg';
import photo2 from './images/photo2.jpg';
import photo3 from './images/photo3.jpg';
import photo4 from './images/photo4.jpg';
import photo5 from './images/photo5.jpg';
import photo6 from './images/photo6.jpg';
import photo7 from './images/photo7.jpg';
import photo8 from './images/photo8.jpg';

class About extends Component {
    render () {
        return (
            <div className='container jtf'>
                <h1 className='aboutHeader'>Thrifty Rich</h1>
                <div className='mobileHeadshot'>
                    <img src={photo5} width= '100' height='100' alt = 'photo5' />
                    <img src={photo6} width= '100' height='100' alt = 'photo6' />
                </div>
                <div className='aboutDiv'>
                    <div className='aboutPara'>
                        <p><tab1/>My name is Asia and I love thrifted fashion! I absolutely love putting "over the top" looks together for any occasion, no matter how big or small it is. I feel like one should turn heads and stand out when they step in any room. Thrifty Rich can help you do just that!</p> 
                        <p className='about2Para'><tab1/>I started my thrift journey six months ago and it was one of the best decisions of my life. Not only has thrifting been my therapy; but it has also opened my fashion mind up to creating looks from vintage fashion to current fashion. I've always believed that one statement piece can make an entire outfit pop, regardless of what it is. I've never been one to keep up with expensive labels; because a true fashionista can make a $10 outfit look like a million bucks. I came up with "Thrifty Rich" because my style is just that. Ball on a budget but look good doing it!</p>
                    </div>
                    <div className='aboutImage'>
                        {/* <div> */}
                            <img className='aImage' src={photo7} width= '200' height='200' alt = 'photo1' />
                            <img className='aImage' src={photo8} width= '200' height='200' alt = 'photo2' />
                            <img className='aImage' src={photo3} width= '200' height='200' alt = 'photo3' />
                            <img className='aImage' src={photo4} width= '200' height='200' alt = 'photo4' />
                        {/* </div> */}
                    </div>
                </div>
            </div>
        )
    }
};

export default About;