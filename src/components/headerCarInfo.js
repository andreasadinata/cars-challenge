import React from 'react';
import HeaderNav from './headerNav';
import './headerCarInfo.css'

export default function Header (props){
    return(
        <div className="car-mini-summary">
            <p className="car-name">Buy 2017 Honda Fit LX</p>
            <p className="price-and-timer">$16,965.00 - Reseved for 29:35</p>
        </div>


    )
}
