import React from 'react';

export default function Subtotal (props){
    return(
        <li className="subtotal numbers">
            <div id="price"><span>Price</span><span className="float-right">$42,559.00</span></div>
            <div id="discount"><span>Discount</span><span className="float-right minus">$4,000.00</span></div>
            <div id="subtotal" className="bold"><span>Subtotal</span><span className="float-right">$38,559.00</span></div>
        </li>
    )
}
