import React from 'react';
import Fees from './fees';
import Tax from './tax';
import Rebates from './rebates'

export default function Total (props){
    return(
        <li className="total numbers">
            <div id="wheel-protection"><span>Wheel protection</span><span className="float-right">$995.00</span></div>
            <div id="extended-service-contract"><span>Extended service contract</span><span className="float-right">$1,995.00</span></div>
            <Fees/>
            <Tax/>
            <Rebates/>
            <div id="total" className="bold"><span>Total</span><span className="float-right">$43,201.22</span></div>
        </li>
    )
}
