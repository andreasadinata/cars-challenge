import React from 'react';
import './placeOrder.css';

export default function PlaceOrder(props){
    return(
        <li className="place-order">
            <div className="submit-order" onClick={e=>fetch("/thisisgoingtofail",{method:'POST',body:''})
            .then(console.log).catch(console.error)}>
    Place order</div>
        </li>
    )
}
