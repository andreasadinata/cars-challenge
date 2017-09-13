import React from 'react';
import './headerNav.css'

export default function HeaderNav (props){
    return(
        <nav className="nav-buying-option">
            <ul>
                <li className="upgrades-tab tab">Upgrades</li>
                <li className="trade-in-tab tab">Trade-in</li>
                <li className="payment tab">Payment</li>
                <li className="review-tab tab">Review</li>
            </ul>
        </nav>
    )
}
