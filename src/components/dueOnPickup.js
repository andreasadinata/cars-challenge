import React from 'react';
import TradeInEstimate from './tradeInEstimate'

export default function DueOnPickup (props){
    return(
        <li className="due-on-pickup numbers">
            <TradeInEstimate/>
            <div id="pickup-at-dealership"><span>Pickup at dealership</span><span className="float-right ">$0.00</span></div>
            <div id="dp"><span>Down Payment</span><span className="float-right">$5,000.00</span></div>
            <div id="due-on-pickup" className="bold"><span>Due on pickup</span><span className="float-right">$5,000.00</span></div>
        </li>
        )
}
